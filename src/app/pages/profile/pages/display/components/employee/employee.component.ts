import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from '../../../../store/user';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {

    @Input() role: Employee;

    constructor() { }

    ngOnInit(): void {
    }

}
