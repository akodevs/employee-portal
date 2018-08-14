import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  rows = []

  constructor(public authService: AuthService, private router: Router) {
    this.fetch((data) => {
      this.rows = data
      // data.filter(
      //   employee => employee.id === 10)
    })
  }

  ngOnInit() {
    this.authService.authStatus.subscribe(authStatus => {
      console.log(authStatus)
      if (!authStatus.isAuthenticated) {
        this.router.navigate(['/session/signin'], {
          queryParams: { redirectUrl: this.router.routerState.snapshot.url },
        })
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

