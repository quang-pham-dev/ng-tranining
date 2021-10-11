import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';



@NgModule({
    declarations: [FormFieldComponent],
    imports: [
        CommonModule
    ],
    exports: [
        FormFieldComponent
    ]
})
export class FormFieldModule { }
