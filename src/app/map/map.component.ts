import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import * as fromCameras from '../cameras/cameras.reducer';
import * as fromCameraEvents from '../camera-events/camera-events.reducer';
import { merge, of, combineLatest } from 'rxjs';
import Camera from '../cameras/models/camera';
import CameraEvent from '../camera-events/models/camera-event';
import { withLatestFrom, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  markers$ = combineLatest(
    this.store.pipe(select(fromCameras.selectCameras)),
    this.store.pipe(select(fromCameraEvents.selectCameraEvents))
  ).pipe(
    switchMap(([cameras, cameraEvents]) => of({ ...cameras, ...cameraEvents }))
  );
  lat = 31.7683;
  lng = 35.2137;
  zoom = 7;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onMarkerClick(marker: Camera | CameraEvent) {
    console.log(marker);
  }
}
