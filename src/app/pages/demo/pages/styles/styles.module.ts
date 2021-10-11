import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylesRoutingModule } from './styles-routing.module';
import { StylesComponent } from './styles.component';


@NgModule({
  declarations: [StylesComponent],
  imports: [
    CommonModule,
    StylesRoutingModule
  ]
})
export class StylesModule { }
