import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CamerasService } from './cameras.service';
import { CamerasActionTypes, LoadCamerasSuccess, CloseAddCamerasDialogSuccess, CloseAddCamerasDialogFailure } from './cameras.actions';
import { switchMap, catchError, map, tap, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material';
import { AddCameraDialogComponent } from './add-camera-dialog/add-camera-dialog.component';


@Injectable()
export class CamerasEffects {

  @Effect()
  loadCameras$ = this.actions$.pipe(
    ofType(CamerasActionTypes.LoadCameras),
    map(() => this.camerasService.loadCameras()),
    switchMap(cameras => of(new LoadCamerasSuccess({cameras}))),
  );

  @Effect()
  openAddCameraDialog$ = this.actions$.pipe(
    ofType(CamerasActionTypes.OpenAddCameraDialog),
    exhaustMap(() => {
      const dialogRef = this.dialog.open(AddCameraDialogComponent);
      return dialogRef.afterClosed();
    }),
    map(result => {
      if (result === undefined) {
        return new CloseAddCamerasDialogFailure();
      } else {
        return new CloseAddCamerasDialogSuccess({camera: result});
      }
    })
  );

  constructor(private actions$: Actions, private camerasService: CamerasService, private dialog: MatDialog) {}

}
