import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CameraEventsActionTypes } from './camera-events.actions';



@Injectable()
export class CameraEventsEffects {

  // @Effect({ dispatch: false })
  // startEmitingCameraEvents$ = this.actions$.pipe(
  //   ofType(CameraEventsActionTypes.AddCameraEvent),
  //   tap(action => this.dashboardService.startTimer(action.paylo))
  // )

  constructor(private actions$: Actions) {}

}
