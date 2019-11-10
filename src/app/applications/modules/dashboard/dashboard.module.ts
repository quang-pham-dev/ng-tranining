import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";
import { DashboadRoutingModule } from './dashboad-routing.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboadRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
