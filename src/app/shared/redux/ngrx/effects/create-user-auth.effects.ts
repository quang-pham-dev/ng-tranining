import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { AppActions, ACT_USER_AUTH } from "../actions/index";
import { UsersService } from '../../../services/common-services/users.service';
import { CreateUserAuthResponse } from '../../../models/model-responses/response-users/create-user-auth-response';
import { UpdateUserAuthResponse } from '../../../models/model-responses/response-users/update-user-response';


@Injectable()

export class CreateUserAuthEffects {

    constructor(
        private action$: Actions,
        private userService: UsersService
    ) { }

    @Effect() createUserAuth$: Observable<Action> = this.action$.pipe(
        ofType(ACT_USER_AUTH.CREATE_USER_AUTH),
        mergeMap(
            (action: AppActions) => this.userService.createUserAuth(action.payload).pipe(
                map(
                    (response: CreateUserAuthResponse) => ({
                        type: ACT_USER_AUTH.CREATE_USER_AUTH_SUCCESS,
                        payload: response
                    })
                ),
                catchError(
                    error => of({
                        type: ACT_USER_AUTH.CREATE_USER_AUTH_ERROR,
                        payload: error
                    })
                )
            )
        )
    );

    //
    @Effect() updateUserAuth$: Observable<Action> = this.action$.pipe(
        ofType(ACT_USER_AUTH.UPDATE_USER_AUTH),
        mergeMap(
            (action: AppActions) => this.userService.updateUserAuth(action.payload).pipe(
                map(
                    (response: UpdateUserAuthResponse) => ({
                        type: ACT_USER_AUTH.UPDATE_USER_AUTH_SUCCESS,
                        payload: response
                    })
                ),
                catchError(
                    error => of({
                        type: ACT_USER_AUTH.UPDATE_USER_AUTH_ERROR,
                        payload: error
                    })
                )
            )
        )
    );
}