import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { IsAuthGuard } from '../../shared/guards/permission-guards/is-auth.guard';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [
      IsAuthGuard
    ]
  },
  {
    path: 'register-user',
    component: RegisterUserComponent,
    canActivate: [
      IsAuthGuard
    ]
  },
  {
    path: 'forgot-password',
    component: ForgotpasswordComponent,
    canActivate: [
      IsAuthGuard
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRootRoutingModule { }
