import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import Camera from './models/camera';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { LoadCameras } from './cameras.actions';
import * as fromCameras from './cameras.reducer';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CamerasComponent implements OnInit {
  cameras$: Observable<Camera[]>;

  constructor(private store: Store<AppState>) {
    this.cameras$ = this.store.pipe(select(fromCameras.selectCameras));
  }

  ngOnInit() {
    this.store.dispatch(new LoadCameras());
  }

}
