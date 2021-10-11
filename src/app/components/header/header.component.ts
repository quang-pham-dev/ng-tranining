import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/store/user';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    @Input() user: User;

    @Input() isAuthorized: boolean;
    @Output() signOut = new EventEmitter<void>();

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    onSignOut(): void {
        this.signOut.emit();
    }

    onProfileNavigate(): void {
        const path = this.user ? this.user.uid : 'new';
        this.router.navigate(['/profile', path]);
    }

}
