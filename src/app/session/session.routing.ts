import { Routes } from '@angular/router'

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { SignInComponent } from './signin/signin.component'

export const SessionRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '404',
      component: PageNotFoundComponent
    }, {
      path: 'signin',
      component: SignInComponent
    }]
  }
]
