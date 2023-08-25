import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromUser from '../user.reducer';
import * as fromEmergency from '../emergency.reducer';

//Core state of app initilization
export interface State {

  [fromUser.userFeatureKey]: fromUser.State;
  [fromEmergency.emergencyFeatureKey]: fromEmergency.State;
}

//reducuer registration for respective featrue state
export const reducers: ActionReducerMap<State> = {

  [fromUser.userFeatureKey]: fromUser.reducer,
  [fromEmergency.emergencyFeatureKey]: fromEmergency.reducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
