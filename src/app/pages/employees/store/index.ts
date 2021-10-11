import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromList from './list/list.reducer';
import { ListEffects } from './list/list.effects';

export interface EmployeesState {
    list: fromList.ListState;
}

export const reducers: ActionReducerMap<EmployeesState> = {
    list: fromList.reducer
};

export const effects: any[] = [
    ListEffects
];

export const getEmployeesState = createFeatureSelector<EmployeesState>('employees');
