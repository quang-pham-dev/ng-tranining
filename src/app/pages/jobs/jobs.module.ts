import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from '@app/shared/buttons';

import { FormModule } from './components/form/form.module';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobComponent } from './components/job/job.component';


@NgModule({
    declarations: [JobsComponent, JobComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature('jobs', reducers),
        EffectsModule.forFeature(effects),
        JobsRoutingModule,
        MatDialogModule,
        ButtonModule,
        FormModule
    ]
})
export class JobsModule { }
