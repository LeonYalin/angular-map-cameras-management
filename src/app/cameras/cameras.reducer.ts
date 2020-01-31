import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import Camera from './models/camera';
import { CamerasActionTypes, CamerasActions } from './cameras.actions';
import { AppState } from '../reducers';

export const camerasFeatureKey = 'cameras';

export interface State {
  cameras: Camera[],
}

export const initialState: State = {
  cameras: [],
};

export function reducer(state = initialState, action: CamerasActions): State {
  switch (action.type) {
    case CamerasActionTypes.LoadCamerasSuccess:
      return { ...state, cameras: action.payload.cameras };
    case CamerasActionTypes.CloseAddCamerasDialogSuccess:
      return { ...state, cameras: [...state.cameras, action.payload.camera]};
    default:
      return state;
  }
}

export const camerasFeatureSelector = createFeatureSelector<AppState, State>(camerasFeatureKey);
export const selectCameras = createSelector(
  camerasFeatureSelector,
  (state: State) => state.cameras,
);
