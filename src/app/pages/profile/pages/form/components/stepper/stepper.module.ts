import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { StepperService } from './services';


@NgModule({
    declarations: [StepperComponent],
    imports: [
        CommonModule
    ],
    providers: [StepperService],
    exports: [
        StepperComponent
    ]
})
export class StepperModule { }
