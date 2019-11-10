import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AuthRootRoutingModule } from './auth-root.routing';
import { StoreModule } from '@ngrx/store';
import { createUserAuthReducer } from '../../shared/redux/ngrx/reducers/create-user-auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CreateUserAuthEffects } from '../../shared/redux/ngrx/effects/create-user-auth.effects';
import { UsersService } from '../../shared/services/common-services/users.service';
import { PopoverModule } from "ngx-bootstrap";
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';



@NgModule({
  imports: [
    CommonModule,
    AuthRootRoutingModule,
    //Create Store
    StoreModule.forRoot({
      stateCreateUserAuth: createUserAuthReducer
    }),
    //Create Effect
    EffectsModule.forRoot([CreateUserAuthEffects]),
    FormsModule,
    ReactiveFormsModule,
    PopoverModule.forRoot()
  ],
  declarations: [
    LoginComponent,
    RegisterUserComponent,
    ForgotpasswordComponent
  ],
  providers: [
    UsersService
  ]
})
export class AuthRootModule { }
