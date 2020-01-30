import { Action } from '@ngrx/store';
import Camera from './models/camera';

export enum CamerasActionTypes {
  LoadCameras = '[Cameras] Load Cameras',
  LoadCamerasSuccess = '[Cameras] Load Cameras Success',
  LoadCamerasFailure = '[Cameras] Load Cameras Failure',
}

export class LoadCameras implements Action {
  readonly type = CamerasActionTypes.LoadCameras;
}

export class LoadCamerasSuccess implements Action {
  readonly type = CamerasActionTypes.LoadCamerasSuccess;
  constructor(public payload: { cameras: Camera[] }) { }
}

export class LoadCamerasFailure implements Action {
  readonly type = CamerasActionTypes.LoadCamerasFailure;
  constructor(public payload: { error: string }) { }
}

export type CamerasActions = LoadCameras | LoadCamerasSuccess | LoadCamerasFailure;

