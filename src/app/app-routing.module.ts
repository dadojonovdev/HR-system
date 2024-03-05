import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { canActiveIsLogin, canActivateIsLogout } from './guards/auth.guard'

import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

import { BasePageComponent } from './base-page/base-page.component';

import { DraftComponent } from './draft/draft.component';


const routes: Routes = [
  { 
    path: 'base', 
    component:  BasePageComponent,
    children: [
      { path: '', component: EmployeeListComponent, canActivate: [canActiveIsLogin] },
      { path: 'draft', component:  DraftComponent}
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [canActivateIsLogout]},
  { path: 'register', component: RegisterComponent, canActivate: [canActivateIsLogout]},
  { path: "**", component: BasePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
