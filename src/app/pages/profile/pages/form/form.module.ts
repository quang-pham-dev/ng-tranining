import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
    FormFieldModule, InputModule, AutocompleteModule,
    SelectModule, CheckboxesModule, RadiosModule, DateRangeModule,
} from '@app/shared/controls';
import { FilesUploadModule } from '@app/shared/popups';
import { SpinnerModule } from '@app/shared/indicators';
import { UserPhotoModule } from '@app/shared/layout';
import { ButtonModule } from '@app/shared/buttons';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

import { StepperModule } from './components';
import { PersonalComponent } from './components/personal/personal.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { EmployeeComponent } from './components/professional/roles/employee/employee.component';
import { RecruiterComponent } from './components/professional/roles/recruiter/recruiter.component';
import { ExperiencesComponent } from './components/professional/roles/employee/experiences/experiences.component';

import { MapperService } from './services/mapper/mapper.service';

@NgModule({
    declarations: [FormComponent, PersonalComponent, ProfessionalComponent, EmployeeComponent, RecruiterComponent, ExperiencesComponent],
    imports: [
        CommonModule,
        FormRoutingModule,
        ReactiveFormsModule,
        FormFieldModule,
        InputModule,
        AutocompleteModule,
        SelectModule,
        CheckboxesModule,
        RadiosModule,
        DateRangeModule,
        FilesUploadModule,
        SpinnerModule,
        UserPhotoModule,
        ButtonModule,
        StepperModule
    ],
    providers: [
        MapperService
    ]
})
export class FormModule { }
