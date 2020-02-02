import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { initialCameras } from '../cameras/cameras.stub';
import { normalize } from './dashboard.utils';
import { CamerasMap } from '../cameras/cameras.interface';
import Camera from '../cameras/models/camera';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { AddCameraEvent } from '../camera-events/camera-events.actions';
import CameraEvent from '../camera-events/models/camera-event';
import { MIN_LAT, MAX_LAT, MIN_LON, MAX_LON } from './dashboard.constants';
import { CameraEventTypes } from '../camera-events/camera-events.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  interval;

  constructor(private store: Store<AppState>) { }

  loadCameras(): CamerasMap {
    return cloneDeep(normalize(initialCameras));
  }

  startTimer(camera: Camera) {
    this.stopTimer();
    this.interval = setInterval(() => {
      const cameraEvent = this.generateCameraEvent(camera);
      this.store.dispatch(new AddCameraEvent({ cameraEvent }));
    }, 5000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  generateCameraEvent(camera: Camera): CameraEvent {
    const lat = this.getRandomNum(MIN_LAT, MAX_LAT);
    const lon = this.getRandomNum(MIN_LON, MAX_LON);
    const type = this.getRandomType();
    return new CameraEvent(camera.id, {lat, lon}, type);
  }

  getRandomNum(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomType(): CameraEventTypes {
    const keys = Object.keys(CameraEventTypes);
    const randomPos = this.getRandomInt(0, keys.length);
    return CameraEventTypes[keys[randomPos]];
  }
}
