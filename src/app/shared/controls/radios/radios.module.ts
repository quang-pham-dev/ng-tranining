import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadiosComponent } from './radios.component';



@NgModule({
    declarations: [RadiosComponent],
    imports: [
        CommonModule
    ],
    exports: [
        RadiosComponent
    ]
})
export class RadiosModule { }
