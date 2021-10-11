import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { PasswordModule } from './password/password.module';
import { SelectModule } from './select/select.module';
import { CheckboxesModule } from './checkboxes/checkboxes.module';
import { RadiosModule } from './radios/radios.module';
import { DateModule } from './date/date.module';
import { DateRangeModule } from './date-range/date-range.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        InputModule,
        FormFieldModule,
        PasswordModule,
        SelectModule,
        CheckboxesModule,
        RadiosModule,
        DateModule,
        DateRangeModule,
        AutocompleteModule
    ],
    exports: [
        InputModule,
        FormFieldModule,
        PasswordModule,
        SelectModule,
        CheckboxesModule,
        RadiosModule,
        DateModule,
        DateRangeModule,
        AutocompleteModule
    ]
})
export class ControlsModule { }
