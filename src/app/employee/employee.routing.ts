import { Routes, RouterModule } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { ListComponent } from './list/list.component'

export const EmployeeRoutes: Routes = [
  {
    path: '',
    children: [
      {
          path: 'list',
          component: ListComponent
      },
      {
          path: 'profile/:id',
          component: ProfileComponent
      },
    ]
  }
]

