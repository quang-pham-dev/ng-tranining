import * as lodash from 'lodash'
import { AppActions, INIT_STATE, ACT_USER_AUTH } from '../actions/app.actions';


const ACTIONS: Array<string> = [
    ACT_USER_AUTH.RESET_STATE,
    ACT_USER_AUTH.CREATE_USER_AUTH,
    ACT_USER_AUTH.CREATE_USER_AUTH_SUCCESS,
    ACT_USER_AUTH.CREATE_USER_AUTH_ERROR,

    ACT_USER_AUTH.UPDATE_USER_AUTH,
    ACT_USER_AUTH.UPDATE_USER_AUTH_SUCCESS,
    ACT_USER_AUTH.UPDATE_USER_AUTH_ERROR,
]
//change state
export function createUserAuthReducer(state: AppActions = INIT_STATE, action: AppActions): AppActions {
    if (lodash.includes(ACTIONS, action.type)) {
        return Object.assign(action);
    } else {
        return state;
    }
}