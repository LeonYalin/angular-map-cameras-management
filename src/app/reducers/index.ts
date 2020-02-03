import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCameras from '../cameras/cameras.reducer';
import * as fromMap from '../map/map.reducer';
import * as fromEvents from '../camera-events/camera-events.reducer';
import { InjectionToken } from '@angular/core';


export interface AppState {

  [fromCameras.camerasFeatureKey]: fromCameras.State;
  [fromMap.mapFeatureKey]: fromMap.State;
  [fromEvents.cameraEventsFeatureKey]: fromEvents.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromCameras.camerasFeatureKey]: fromCameras.reducer,
  [fromMap.mapFeatureKey]: fromMap.reducer,
  [fromEvents.cameraEventsFeatureKey]: fromEvents.reducer
};

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('App Reducers');
export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: reducers };

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
