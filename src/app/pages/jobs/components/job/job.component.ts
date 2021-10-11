import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Job } from '../../store/list/list.models';


@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobComponent implements OnInit {

    @Input() item: Job;
    @Input() isEditable: boolean;

    @Output() edit = new EventEmitter<Job>();
    @Output() delete = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    onEdit(job: Job): void {
        this.edit.emit(job);
    }

    onDelete(id: string): void {
        this.delete.emit(id);
    }

}
