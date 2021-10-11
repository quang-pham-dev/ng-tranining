import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxesComponent } from './checkboxes.component';



@NgModule({
    declarations: [CheckboxesComponent],
    imports: [
        CommonModule
    ],
    exports: [
        CheckboxesComponent
    ]
})
export class CheckboxesModule { }
