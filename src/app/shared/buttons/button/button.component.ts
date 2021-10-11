import { Component, OnInit, Input } from '@angular/core';
export type ButtonType = 'button' | 'submit';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input() type: ButtonType;

    constructor() {
        this.type = 'button';
    }

    ngOnInit(): void {
    }

}
