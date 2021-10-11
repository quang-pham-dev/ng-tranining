import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardsRoutingModule } from './guards-routing.module';
import { GuardsComponent } from './guards.component';
import { AuthComponent } from './components/auth/auth.component';
import { UnauthComponent } from './components/unauth/unauth.component';
import { RoleComponent } from './components/role/role.component';


@NgModule({
  declarations: [GuardsComponent, AuthComponent, UnauthComponent, RoleComponent],
  imports: [
    CommonModule,
    GuardsRoutingModule
  ]
})
export class GuardsModule { }
