import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Camera from './models/camera';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { LoadCameras, OpenAddCamerasDialog, SetSelectedCamera } from './cameras.actions';
import * as fromCameras from './cameras.reducer';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CamerasComponent implements OnInit {
  cameras$ = this.store.pipe(select(fromCameras.selectCameras));
  selectedCamera$ = this.store.pipe(select(fromCameras.selectSelectedCamera));
  selectedCameraId: string;

  constructor(private store: Store<AppState>, private camerasService: DashboardService) {
    this.selectedCamera$.subscribe(camera => this.selectedCameraId = camera ? camera.id : undefined);
  }

  ngOnInit() {
    this.store.dispatch(new LoadCameras());
  }

  onAddCameraBtnClick() {
    this.store.dispatch(new OpenAddCamerasDialog());
  }

  onItemClick(camera: Camera) {
    this.store.dispatch(new SetSelectedCamera({ camera }));
    this.camerasService.startTimer(camera);
  }

  isSelected(camera: Camera) {
    return camera.id === this.selectedCameraId;
  }
}
