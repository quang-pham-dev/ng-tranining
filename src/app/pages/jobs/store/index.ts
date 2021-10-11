
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromList from './list/list.reducer';
import { ListEffects } from './list/list.effects';

export interface JobsState {
    list: fromList.ListState;
}

export const reducers: ActionReducerMap<JobsState> = {
    list: fromList.reducer
};

export const effects: any[] = [
    ListEffects
];

export const getJobsState = createFeatureSelector<JobsState>('jobs');
