import { Action } from '@ngrx/store';
import CameraEvent from './models/camera-event';

export enum CameraEventsActionTypes {
  LoadCameraEvents = '[Events] Load Eventss',
  LoadCameraEventsSuccess = '[Events] Load Eventss Success',
  LoadCameraEventsFailure = '[Events] Load Eventss Failure',
  AddCameraEvent = '[Events] Add Camera Event',
}

export class LoadCameraEvents implements Action {
  readonly type = CameraEventsActionTypes.LoadCameraEvents;
}

export class LoadCameraEventsSuccess implements Action {
  readonly type = CameraEventsActionTypes.LoadCameraEventsSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadCameraEventsFailure implements Action {
  readonly type = CameraEventsActionTypes.LoadCameraEventsFailure;
  constructor(public payload: { error: any }) { }
}

export class AddCameraEvent implements Action {
  readonly type = CameraEventsActionTypes.AddCameraEvent;
  constructor(public payload: { cameraEvent: CameraEvent }) { }
}

export type CameraEventsActions =
  LoadCameraEvents |
  LoadCameraEventsSuccess |
  LoadCameraEventsFailure |
  AddCameraEvent;

