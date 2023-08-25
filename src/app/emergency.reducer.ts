import { createReducer, on } from '@ngrx/store';
import { EmergencyActions } from './emergency.actions';

export const emergencyFeatureKey = 'emergency';

export interface State {
  ward: [];
  doctor: []
}

export const initialState: State = {
  ward: [],
  doctor: []
};

export const reducer = createReducer(initialState);
