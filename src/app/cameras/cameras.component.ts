import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import Camera from './models/camera';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { LoadCameras, OpenAddCamerasDialog, SetSelectedCamera } from './cameras.actions';
import * as fromCameras from './cameras.reducer';
import { DashboardService } from '../dashboard/dashboard.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ClearCameraEvents } from '../camera-events/camera-events.actions';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CamerasComponent implements OnInit, OnDestroy {
  cameras$ = this.store.pipe(select(fromCameras.selectCameras));
  selectedCamera$ = this.store.pipe(select(fromCameras.selectSelectedCamera));
  selectedCameraId: string;
  private unsubscribe = new Subject<void>();

  constructor(private store: Store<AppState>, private dashboardService: DashboardService) {
    this.selectedCamera$.pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(camera => this.selectedCameraId = camera ? camera.id : undefined);
  }

  ngOnInit() {
    this.store.dispatch(new LoadCameras());
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onAddCameraBtnClick() {
    this.store.dispatch(new OpenAddCamerasDialog());
  }

  onItemClick(camera: Camera) {
    this.store.dispatch(new SetSelectedCamera({ camera }));
    this.store.dispatch(new ClearCameraEvents());
    this.dashboardService.startTimer(camera);
  }

  isSelected(camera: Camera) {
    return camera.id === this.selectedCameraId;
  }
}
