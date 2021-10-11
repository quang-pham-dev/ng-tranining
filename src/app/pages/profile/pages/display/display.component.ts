import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import * as fromProfileUser from '../../store/user';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit, OnDestroy {

    user$: Observable<fromProfileUser.User>;
    isOwnProfile$: Observable<boolean>;

    constructor(
        private route: ActivatedRoute,
        private store: Store<fromRoot.State>
    ) { }

    ngOnInit(): void {

        this.user$ = this.store.pipe(select(fromProfileUser.getUser));

        this.route.params.subscribe((params: Params) => {
            const id = params.id;

            this.store.dispatch(new fromProfileUser.Read(id));

            this.isOwnProfile$ = this.store.pipe(
                select(fromUser.getUser),
                map(user => user && user.uid === id)
            );
        });

    }

    ngOnDestroy(): void {
        this.store.dispatch(new fromProfileUser.Clear());
    }

}
