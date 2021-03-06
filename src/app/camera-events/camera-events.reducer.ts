import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import CameraEvent from './models/camera-event';
import { CameraEventsActions, CameraEventsActionTypes } from './camera-events.actions';
import { CameraEventsMap } from './camera-events.interface';
import { AppState } from '../reducers';


export const cameraEventsFeatureKey = 'cameraEvents';

export interface State {
  cameraEvents: CameraEvent[],
  selectedCameraEventId: string;
}

export const initialState: State = {
  cameraEvents: [],
  selectedCameraEventId: null,
};

export function reducer(state = initialState, action: CameraEventsActions): State {
  switch (action.type) {
    case CameraEventsActionTypes.AddCameraEvent:
      const cameraEvents = state.cameraEvents || [];
      return { ...state, cameraEvents: [
          ...cameraEvents,
          action.payload.cameraEvent,
        ]
      }
    case CameraEventsActionTypes.SetSelectedCameraEvent:
      return {
        ...state,
        selectedCameraEventId: action.payload.cameraEvent.id,
      }
    case CameraEventsActionTypes.ClearCameraEvents:
      return {
        ...state,
        cameraEvents: [],
      }
    default:
      return state;
  }
}

export const cameraEventsFeatureSelector = createFeatureSelector<AppState, State>(cameraEventsFeatureKey);
export const selectCameraEvents = createSelector(
  cameraEventsFeatureSelector,
  (state: State) => state.cameraEvents,
);
export const selectSelectedCameraEvent = createSelector(
  cameraEventsFeatureSelector,
  (state: State) => state.cameraEvents ? state.cameraEvents.find(cameraEvent => state.selectedCameraEventId === cameraEvent.id) : null,
);
