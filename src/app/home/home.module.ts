import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'

import { HomeRoutes } from './home.routing'
import { HomeMaterialModule } from './home.material.module'
import { HomeComponent } from './home.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    HomeMaterialModule,
    NgxDatatableModule,
    FlexLayoutModule
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule { }
