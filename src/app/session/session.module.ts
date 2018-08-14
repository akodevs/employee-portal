import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { SessionMaterialModule } from './session.material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'

import { SessionRoutes } from './session.routing'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { SignInComponent } from './signin/signin.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SessionRoutes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SessionMaterialModule
  ],
  declarations: [
    PageNotFoundComponent,
    SignInComponent,
  ]
})

export class SessionModule {}
