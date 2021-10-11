
import { ActionReducerMap } from '@ngrx/store';

import * as fromDictionaries from './dictionaries';
import * as fromUser from './user';

export interface State {
    dictionaries: fromDictionaries.DictionariesState;
    user: fromUser.UserState;
}

export const reducers: ActionReducerMap<State> = {
    dictionaries: fromDictionaries.reducer,
    user: fromUser.reducer
};

export const effects = [
    fromDictionaries.DictionariesEffects,
    fromUser.UserEffects
];
