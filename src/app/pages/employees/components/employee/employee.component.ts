import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../../store/list/list.models';


@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {

    @Input() employee: User;

    constructor() { }

    ngOnInit(): void {
    }

}
