import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ChartsModule } from 'ng2-charts/ng2-charts'
import { FlexLayoutModule } from '@angular/flex-layout'

import { EmployeeMaterialModule } from './employee.material.module'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { EmployeeRoutes } from './employee.routing'
import { ProfileComponent } from './profile/profile.component'
import { ListComponent } from './list/list.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeRoutes),
    EmployeeMaterialModule,
    NgxDatatableModule,
    ChartsModule,
    FlexLayoutModule
  ],
  declarations: [ ListComponent, ProfileComponent]
})
export class EmployeeModule { }
