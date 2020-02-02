import { Action } from '@ngrx/store';
import CameraEvent from './models/camera-event';

export enum CameraEventsActionTypes {
  LoadCameraEvents = '[CameraEvents] Load Events',
  LoadCameraEventsSuccess = '[CameraEvents] Load Events Success',
  LoadCameraEventsFailure = '[CameraEvents] Load Events Failure',
  AddCameraEvent = '[CameraEvents] Add Camera Event',
  SetSelectedCameraEvent = '[CameraEvents] Set Selected Camera Event',
  ClearCameraEvents = '[CameraEvents] Clear Camera Events',
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

export class SetSelectedCameraEvent implements Action {
  readonly type = CameraEventsActionTypes.SetSelectedCameraEvent;
  constructor(public payload: { cameraEvent: CameraEvent }) { }
}

export class ClearCameraEvents implements Action {
  readonly type = CameraEventsActionTypes.ClearCameraEvents;
}

export type CameraEventsActions =
  LoadCameraEvents |
  LoadCameraEventsSuccess |
  LoadCameraEventsFailure |
  AddCameraEvent |
  SetSelectedCameraEvent |
  ClearCameraEvents;

