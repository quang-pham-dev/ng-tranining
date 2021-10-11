import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import { getProfileState, ProfileState } from '../index';

export const getUserState = createSelector(
    getProfileState,
    (state: ProfileState) => state.user
);

export const getUser = createSelector(
    getUserState,
    (state: UserState) => state.entity
);

export const getLoading = createSelector(
    getUserState,
    (state: UserState) => state.loading
);

export const getRole = createSelector(
    getUserState,
    (state: UserState) => state.entity.role
);
