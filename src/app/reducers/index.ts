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
import * as fromEvents from '../events/events.reducer';


export interface State {

  [fromCameras.camerasFeatureKey]: fromCameras.State;
  [fromMap.mapFeatureKey]: fromMap.State;
  [fromEvents.eventsFeatureKey]: fromEvents.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromCameras.camerasFeatureKey]: fromCameras.reducer,
  [fromMap.mapFeatureKey]: fromMap.reducer,
  [fromEvents.eventsFeatureKey]: fromEvents.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
