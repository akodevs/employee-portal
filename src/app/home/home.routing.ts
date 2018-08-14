import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'

export const HomeRoutes: Routes = [
  {
    path: '',
    children: [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
      path: 'home',
      component: HomeComponent
    }]
  }
]

