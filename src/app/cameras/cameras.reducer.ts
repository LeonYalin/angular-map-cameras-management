import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import Camera from './models/camera';
import { CamerasActionTypes, CamerasActions } from './cameras.actions';
import { AppState } from '../reducers';
import { CamerasMap } from './cameras.interface';

export const camerasFeatureKey = 'cameras';

export interface State {
  cameras: CamerasMap;
  selectedCameraId: string;
}

export const initialState: State = {
  cameras: {},
  selectedCameraId: null,
};

export function reducer(state = initialState, action: CamerasActions): State {
  switch (action.type) {
    case CamerasActionTypes.LoadCamerasSuccess:
      return { ...state, cameras: action.payload.cameras };
    case CamerasActionTypes.AddCamera:
      return { ...state, cameras: {
          ...state.cameras,
          [action.payload.camera.id]: action.payload.camera
        }
      };
    case CamerasActionTypes.SetSelectedCamera:
      return {
        ...state,
        selectedCameraId: action.payload.camera.id,
      };
    default:
      return state;
  }
}

export const camerasFeatureSelector = createFeatureSelector<AppState, State>(camerasFeatureKey);
export const selectCameras = createSelector(
  camerasFeatureSelector,
  (state: State) => state.cameras,
);
export const selectSelectedCamera = createSelector(
  camerasFeatureSelector,
  (state: State) => state.cameras[state.selectedCameraId],
);
