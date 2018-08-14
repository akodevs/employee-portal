import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppRoutingModule } from './app-routing.module'
import 'hammerjs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { MaterialModule } from './material.module'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { SimpleDialogComponent, UIService } from './common/ui.service'
import { AuthService } from './auth/auth.service'
import { AuthGuard } from './auth/auth-guard.service'
import { AuthHttpInterceptor } from './auth/auth-http-interceptor'

import { LoadingBarRouterModule } from '@ngx-loading-bar/router'

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar'
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {
  MenuComponent,
  HeaderComponent,
  SidebarComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './core'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
}

@NgModule({
  declarations: [
    AppComponent,
    SimpleDialogComponent,
    MenuComponent,
    HeaderComponent,
    SidebarComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingBarRouterModule,
    FlexLayoutModule,
    PerfectScrollbarModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UIService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [SimpleDialogComponent],
})
export class AppModule {}

