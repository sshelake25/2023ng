import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  list: Array<any>;
}

export const initialState: State = {
  list: [1, 2, 3, 4],
};

export const reducer = createReducer(initialState);
