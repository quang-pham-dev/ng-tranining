import { User } from './user.models';

import * as fromActions from './user.actions';

export interface UserState {
    entity: User;
    loading: boolean;
    error: string;
}

const initialState: UserState = {
    entity: null,
    loading: null,
    error: null
};

export function reducer(state = initialState, action: fromActions.All): UserState {
    switch (action.type) {

        // Read

        case fromActions.Types.READ: {
            return { ...state, loading: true, error: null };
        }

        case fromActions.Types.READ_SUCCESS: {
            return { ...state, entity: action.user, loading: false };
        }

        case fromActions.Types.READ_ERROR: {
            return { ...state, entity: null, loading: false, error: null };
        }

        // Clear

        case fromActions.Types.CLEAR: {
            return { ...initialState };
        }

        default: {
            return state;
        }

    }
}
