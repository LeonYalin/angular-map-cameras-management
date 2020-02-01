import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { initialCameras } from './cameras.stub';
import { normalize } from './models/utils';
import { CamerasMap } from './cameras.interface';
import { Observable, timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Camera from './models/camera';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {
  // stopTimer$ = new Subject<void>();
  // timer$: Observable<number>;
  interval;

  constructor(private store: Store<AppState>) { }

  loadCameras(): CamerasMap {
    return cloneDeep(normalize(initialCameras));
  }

  startTimer(camera: Camera) {
    this.interval = setInterval(() => {
      this.store.dispatch(new StartEmitingCameraEvents({ camera }));
    }, 1000);
    // this.timer$ = timer(1000).pipe(takeUntil(this.stopTimer$));
  }

  stopTimer() {
    clearInterval(this.interval);
    // this.stopTimer$.next();
  }
}
