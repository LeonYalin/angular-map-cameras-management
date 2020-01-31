import { Action } from '@ngrx/store';
import Camera from './models/camera';

export enum CamerasActionTypes {
  LoadCameras = '[Cameras] Load Cameras',
  LoadCamerasSuccess = '[Cameras] Load Cameras Success',
  LoadCamerasFailure = '[Cameras] Load Cameras Failure',
  OpenAddCameraDialog = '[Cameras] Open Add Cameras Dialog',
  CloseAddCamerasDialogSuccess = '[Cameras] Close Add Cameras Dialog Success',
  CloseAddCamerasDialogFailure = '[Cameras] Close Add Cameras Dialog Failure',
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

export class OpenAddCamerasDialog implements Action {
  readonly type = CamerasActionTypes.OpenAddCameraDialog;
}

export class CloseAddCamerasDialogSuccess implements Action {
  readonly type = CamerasActionTypes.CloseAddCamerasDialogSuccess;
  constructor(public payload: { camera: Camera }) { }
}

export class CloseAddCamerasDialogFailure implements Action {
  readonly type = CamerasActionTypes.CloseAddCamerasDialogFailure;
}

export type CamerasActions = LoadCameras | LoadCamerasSuccess | LoadCamerasFailure | OpenAddCamerasDialog |
  CloseAddCamerasDialogSuccess | CloseAddCamerasDialogFailure;

