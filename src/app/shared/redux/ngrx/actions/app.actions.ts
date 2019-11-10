import { Action } from "@ngrx/store";

export class AppActions implements Action {
    public type: string;
    public payload?: any;
}

// INIT STATE
export const INIT_STATE = { type: '' };

// DESTROY STATE
export const RESET_STATE = 'RESET_STATE';

//
export const ACT_USER_AUTH = {

    //
    CREATE_USER_AUTH: 'ACT_CREATE_USER_AUTH',
    CREATE_USER_AUTH_SUCCESS: 'ACT_CREATE_USER_AUTH_SUCCESS',
    CREATE_USER_AUTH_ERROR: 'ACT_CREATE_USER_AUTH_ERROR',

    //
    UPDATE_USER_AUTH: 'ACT_UPDATE_USER_AUTH',
    UPDATE_USER_AUTH_SUCCESS: 'ACT_UPDATE_USER_AUTH_SUCCESS',
    UPDATE_USER_AUTH_ERROR: 'ACT_UPDATE_USER_AUTH_ERROR',

    //
    RESET_STATE: 'ATC_AUTH_RESET_STATE'
};