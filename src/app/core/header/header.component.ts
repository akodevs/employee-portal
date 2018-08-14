import { Component, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import * as screenfull from 'screenfull'

import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>()

  constructor(public authService: AuthService, private router: Router) {}

  fullScreenToggle(): void {
    if (screenfull.enabled) {
      screenfull.toggle()
    }
  }

  signOut(): void {
    this.authService.logout()
    this.router.navigate(['/'])
  }
}
