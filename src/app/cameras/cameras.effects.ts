import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CamerasService } from './cameras.service';
import { CamerasActionTypes, LoadCamerasSuccess } from './cameras.actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class CamerasEffects {

  @Effect()
  loadCameras$ = this.actions$.pipe(
    ofType(CamerasActionTypes.LoadCameras),
    map(() => this.camerasService.loadCameras()),
    switchMap(cameras => of(new LoadCamerasSuccess({cameras}))),
  )

  constructor(private actions$: Actions, private camerasService: CamerasService) {}

}
