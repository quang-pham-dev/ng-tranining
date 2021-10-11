import { createSelector } from '@ngrx/store';
import { FormState } from './form.reducer';
import { getProfileState, ProfileState } from '../index';

export const getFormState = createSelector(
    getProfileState,
    (state: ProfileState) => state.form
);

export const getPersonalForm = createSelector(
    getFormState,
    (state: FormState) => !!state.personal && state.personal
);

export const getProfessionalForm = createSelector(
    getFormState,
    (state: FormState) => !!state.professional && state.professional
);
