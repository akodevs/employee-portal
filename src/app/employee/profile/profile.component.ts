import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'

import { AuthService, IAuthStatus } from '../../auth/auth.service'
import { Role } from '../../auth/role.enum'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  protected currentAuthStatus: IAuthStatus
  role = Role
  employee
  images: any[] = []
  num = 1

  pieChartColors: any[] = [{
    backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']
  }]

  pieOptions: any = {
    responsive: true,
    legend: {
      position: 'right'
    }
  }

  pieChartLabels: string[] = ['Angular', 'Typescript', 'Docker']
  pieChartData: number[] = [300, 500, 100]
  pieChartType = 'pie'

  constructor(public authService: AuthService, private router: ActivatedRoute, private route: Router) {
    for (this.num; this.num <= 9; this.num += 1) {
      this.images.push(this.num)
    }

    this.router.params.subscribe((data: Params) => {
      this.fetchEmpDetails(data['id'])
    })

    this.authService.authStatus.subscribe(
      authStatus => (this.currentAuthStatus = authStatus)
    )
  }

  ngOnInit() {
    this.authService.authStatus.subscribe(authStatus => {
      console.log(authStatus)
      if (!authStatus.isAuthenticated) {
        this.route.navigate(['/session/signin'], {
          queryParams: { redirectUrl: this.route.routerState.snapshot.url },
        })
      }
    })
  }

  fetchEmpDetails(empId: string) {
    this.fetch((data) => {
      this.employee = data.filter(emp => emp.id === parseInt(empId, 10))[0]

      if (Object.keys(this.employee).length === 0) {
        this.route.navigate(['/employee/list'])
      }
    })
  }

  // this is just the easiest way to read data from a json file
  // we can create a service for HTTPRequest
  fetch(cb) {
    const req = new XMLHttpRequest()
    req.open('GET', `assets/data/employee.json`)

    req.onload = () => {
      cb(JSON.parse(req.response))
    }

    req.send()
  }
}
