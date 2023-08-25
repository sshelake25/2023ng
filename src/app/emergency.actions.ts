import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const EmergencyActions = createActionGroup({
  source: 'Emergency',
  events: {
    'Load Emergencys': emptyProps(),
    'Load Emergencys Success': props<{ data: unknown }>(),
    'Load Emergencys Failure': props<{ error: unknown }>(),
  }
});
