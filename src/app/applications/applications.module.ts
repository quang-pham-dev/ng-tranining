import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [BlankLayoutComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ApplicationsModule { }
