import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { canActiveIsLogin, canActivateIsLogout } from './guards/auth.guard'
import { BasePageComponent } from './base-page/base-page.component';


const routes: Routes = [
  { 
    path: '', 
    component:  BasePageComponent,
    children: [
      { path: '', component: EmployeeListComponent, canActivate: [canActiveIsLogin] }
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
