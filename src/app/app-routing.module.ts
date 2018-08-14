import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AdminLayoutComponent, AuthLayoutComponent } from './core'

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#EmployeeModule'
      }
    ]
  },  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'session',
      loadChildren: './session/session.module#SessionModule'
    }]
  }, {
    path: '**',
    redirectTo: 'session/404'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
