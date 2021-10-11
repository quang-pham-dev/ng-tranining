import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dictionaries } from '@app/store/dictionaries';

import { ControlEntities, mapControls } from '@app/shared/utils/form';

import { ExperienceForm } from './experiences/experiences.component';


export interface EmployeeForm {
    specialization: string;
    skills: string[];
    qualification: string;
    expectedSalary: number;
    experiences: ExperienceForm[];
}

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {

    @Input() parent: FormGroup;
    @Input() name: string;

    @Input() value: EmployeeForm;
    @Input() dictionaries: Dictionaries;

    form: FormGroup;
    controls: ControlEntities;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            expectedSalary: [null, {
                updateOn: 'blur', validators: [
                    Validators.required
                ]
            }],
            specialization: [null, {
                updateOn: 'change', validators: [
                    Validators.required
                ]
            }],
            qualification: [{ value: null, disabled: true }, {
                updateOn: 'change', validators: [
                    Validators.required
                ]
            }],
            skills: [{ value: null, disabled: true }, {
                updateOn: 'change', validators: [
                    Validators.required
                ]
            }]
        });

        this.controls = {
            specialization: {
                items: this.dictionaries.specializations.controlItems,
                changed: () => {
                    this.controls.qualification.map();
                    this.controls.skills.map();
                }
            },
            qualification: {
                items: this.dictionaries.qualifications.controlItems,
                map: () => {
                    if (this.form.value.specialization) {
                        this.form.controls.qualification.enable();
                    } else {
                        this.form.controls.qualification.reset();
                        this.form.controls.qualification.disable();
                    }
                }
            },
            skills: {
                items: this.dictionaries.skills.controlItems,
                map: () => {
                    if (this.form.value.specialization) {
                        this.form.controls.skills.enable();

                        const items = [...this.dictionaries.skills.controlItems].map(
                            (item, index) => ({ ...item, label: `${item.label} (${index + 1})` })
                        );

                        this.controls.skills.items = items;

                    } else {
                        this.form.controls.skills.reset();
                        this.form.controls.skills.disable();
                    }
                }
            }
        };

        if (this.value) {
            this.form.patchValue(this.value);
        }

        mapControls(this.controls);

        this.parent.addControl(this.name, this.form);
    }

    ngOnDestroy(): void {
        this.parent.removeControl(this.name);
    }

}
