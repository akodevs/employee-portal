import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // newsfeed
  messages: Object[] = [{
    from: 'Ali Connors',
    message: 'Thanks for the acknowledgement',
    photo: 'assets/images/face3.jpg',
    subject: 'Project kodiak',
  }, {
    from: 'Trevor Hansen',
    message: 'Congrats Ali Connors!',
    photo: 'assets/images/face6.jpg',
    subject: 'Project Kodiak',
  }, {
    from: 'Sandra Adams',
    message: 'Just added one in our company milestone',
    photo: 'assets/images/face4.jpg',
    subject: 'Project Veronica',
  } ]

  rows = []

  constructor(public authService: AuthService, private router: Router) {
    this.fetch((data) => { this.rows = data })
  }

  ngOnInit() {
    this.authService.authStatus.subscribe(authStatus => {
      if (!authStatus.isAuthenticated) {
        this.router.navigate(['/session/signin'], {
          queryParams: { redirectUrl: this.router.routerState.snapshot.url },
        })
      }
    })
  }

  // project table
  fetch(cb) {
      const req = new XMLHttpRequest()
      req.open('GET', `assets/data/projects.json`)
      req.onload = () => {
        cb(JSON.parse(req.response))
      }
      req.send()
  }
}
