import { Action } from '@ngrx/store';
import Camera from './models/camera';
import { CamerasMap } from './cameras.interface';

export enum CamerasActionTypes {
  LoadCameras = '[Cameras] Load Cameras',
  LoadCamerasSuccess = '[Cameras] Load Cameras Success',
  LoadCamerasFailure = '[Cameras] Load Cameras Failure',
  OpenAddCameraDialog = '[Cameras] Open Add Cameras Dialog',
  AddCamera = '[Cameras] Close Add Camera',
  CloseAddCamerasDialogFailure = '[Cameras] Close Add Cameras Dialog Failure',
  SetSelectedCamera = '[Cameras] Set Selected Camera',
}

export class LoadCameras implements Action {
  readonly type = CamerasActionTypes.LoadCameras;
}

export class LoadCamerasSuccess implements Action {
  readonly type = CamerasActionTypes.LoadCamerasSuccess;
  constructor(public payload: { cameras: CamerasMap }) { }
}

export class LoadCamerasFailure implements Action {
  readonly type = CamerasActionTypes.LoadCamerasFailure;
  constructor(public payload: { error: string }) { }
}

export class OpenAddCamerasDialog implements Action {
  readonly type = CamerasActionTypes.OpenAddCameraDialog;
}

export class AddCamera implements Action {
  readonly type = CamerasActionTypes.AddCamera;
  constructor(public payload: { camera: Camera }) { }
}

export class CloseAddCamerasDialogFailure implements Action {
  readonly type = CamerasActionTypes.CloseAddCamerasDialogFailure;
}

export class SetSelectedCamera implements Action {
  readonly type = CamerasActionTypes.SetSelectedCamera;
  constructor(public payload: { camera: Camera }) { }
}

export type CamerasActions =
  LoadCameras |
  LoadCamerasSuccess |
  LoadCamerasFailure |
  OpenAddCamerasDialog |
  AddCamera |
  CloseAddCamerasDialogFailure |
  SetSelectedCamera;

