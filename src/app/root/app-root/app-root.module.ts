import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRootRoutingModule } from './app-root.routing';
import { AuthInterceptorModule } from '../../shared/commont-modules/auth-interceptor/auth-interceptor.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRootRoutingModule,
    AuthInterceptorModule

  ],
  providers:[

  ]
})
export class AppRootModule { }
