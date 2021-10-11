import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailConfirmRoutingModule } from './email-confirm-routing.module';
import { EmailConfirmComponent } from './email-confirm.component';


@NgModule({
  declarations: [EmailConfirmComponent],
  imports: [
    CommonModule,
    EmailConfirmRoutingModule
  ]
})
export class EmailConfirmModule { }
