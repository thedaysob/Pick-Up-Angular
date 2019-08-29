import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContainerComponent } from './container/main-container/main-container.component'
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component'
import { LoginComponent } from './container/login/login.component'

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'main-container', component: MainContainerComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
