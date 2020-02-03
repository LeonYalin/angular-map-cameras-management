import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import * as fromCameras from '../cameras/cameras.reducer';
import * as fromCameraEvents from '../camera-events/camera-events.reducer';
import { of, combineLatest, Subject, BehaviorSubject, merge } from 'rxjs';
import Camera from '../cameras/models/camera';
import CameraEvent from '../camera-events/models/camera-event';
import { switchMap, takeUntil } from 'rxjs/operators';
import { GoogleMapOptions, MarkerAnimations, MapMarker } from './map.interface';
import { DEFAULT_MAP_OPTIONS } from './map.constants';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();
  mapOptions$ = new BehaviorSubject<GoogleMapOptions>(DEFAULT_MAP_OPTIONS);
  markers$ = combineLatest(
    this.store.pipe(select(fromCameras.selectCameras)),
    this.store.pipe(select(fromCameraEvents.selectCameraEvents))
  ).pipe(
    switchMap(([cameras, cameraEvents]) => of([...cameras, ...cameraEvents]))
  );
  selectedMarker$ = merge(
    this.store.pipe(select(fromCameras.selectSelectedCamera)),
    this.store.pipe(select(fromCameraEvents.selectSelectedCameraEvent))
  ).pipe(
    switchMap(marker => of(marker))
  );
  selectedMarkerId: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.selectedMarker$.pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(marker => {
      if (marker) {
        this.selectedMarkerId = marker.id;
        this.panTo(marker);
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onMarkerClick(marker: MapMarker) {
    this.panTo(marker);
  }

  panTo(marker: MapMarker) {
    if (!marker) return;
    this.mapOptions$.next({ lat: marker.lat, lon: marker.lon, zoom: 9 });
  }

  getMarkerAnimation(marker: MapMarker): MarkerAnimations {
    return marker.id === this.selectedMarkerId ? MarkerAnimations.BOUNCE : MarkerAnimations.DEFAULT;
  }
}
