import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Ptl Users': emptyProps(),
    'Ptl Users Success': props<{ data: unknown }>(),
    'Ptl Users Failure': props<{ error: unknown }>(),
  }
});
