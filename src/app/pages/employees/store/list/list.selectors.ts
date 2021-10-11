import { createSelector } from '@ngrx/store';

import { ListState } from './list.reducer';
import { getEmployeesState, EmployeesState } from '../index';

export const getListState = createSelector(
    getEmployeesState,
    (state: EmployeesState) => state.list
);

export const getItems = createSelector(
    getListState,
    (state: ListState) => state.items
);

export const getLoading = createSelector(
    getListState,
    (state: ListState) => state.loading
);
