import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoAttachAuthService } from './service/auto-attach-auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutoAttachAuthService,
      multi:true
    }
  ]
})
export class AuthInterceptorModule { }
