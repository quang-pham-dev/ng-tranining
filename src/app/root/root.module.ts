import { NgModule } from '@angular/core';
import {
  CommonModule,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root.routing';
import { IsAuthGuard } from '../shared/guards/permission-guards/is-auth.guard';
import { IsAccessGuard } from '../shared/guards/permission-guards/is-access.guard';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RootRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IsAccessGuard,
    IsAuthGuard
  ]
})
export class RootModule { }
