import { Action } from '@ngrx/store';

export enum EventsActionTypes {
  LoadEventss = '[Events] Load Eventss',
  LoadEventssSuccess = '[Events] Load Eventss Success',
  LoadEventssFailure = '[Events] Load Eventss Failure',
}

export class LoadEventss implements Action {
  readonly type = EventsActionTypes.LoadEventss;
}

export class LoadEventssSuccess implements Action {
  readonly type = EventsActionTypes.LoadEventssSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadEventssFailure implements Action {
  readonly type = EventsActionTypes.LoadEventssFailure;
  constructor(public payload: { error: any }) { }
}

export type EventsActions = LoadEventss | LoadEventssSuccess | LoadEventssFailure;

