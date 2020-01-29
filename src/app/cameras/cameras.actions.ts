import { Action } from '@ngrx/store';

export enum CamerasActionTypes {
  LoadCamerass = '[Cameras] Load Camerass',
  LoadCamerassSuccess = '[Cameras] Load Camerass Success',
  LoadCamerassFailure = '[Cameras] Load Camerass Failure',
}

export class LoadCamerass implements Action {
  readonly type = CamerasActionTypes.LoadCamerass;
}

export class LoadCamerassSuccess implements Action {
  readonly type = CamerasActionTypes.LoadCamerassSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadCamerassFailure implements Action {
  readonly type = CamerasActionTypes.LoadCamerassFailure;
  constructor(public payload: { error: any }) { }
}

export type CamerasActions = LoadCamerass | LoadCamerassSuccess | LoadCamerassFailure;

