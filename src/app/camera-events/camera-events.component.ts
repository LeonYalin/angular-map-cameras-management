import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import CameraEvent from './models/camera-event';
import { takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import * as fromCameraEvents from './camera-events.reducer';
import { SetSelectedCameraEvent } from './camera-events.actions';

@Component({
  selector: 'app-events',
  templateUrl: './camera-events.component.html',
  styleUrls: ['./camera-events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CameraEventsComponent implements OnInit, OnDestroy {
  cameraEvents$ = this.store.pipe(select(fromCameraEvents.selectCameraEvents));
  selectedCameraEvent$ = this.store.pipe(select(fromCameraEvents.selectSelectedCameraEvent));
  selectedCameraEventId: string;
  private unsubscribe = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.selectedCameraEvent$.pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(cameraEvent => this.selectedCameraEventId = cameraEvent ? cameraEvent.id : undefined);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onItemClick(cameraEvent: CameraEvent) {
    this.store.dispatch(new SetSelectedCameraEvent({ cameraEvent }));
  }

  isSelected(cameraEvent: CameraEvent) {
    return cameraEvent.id === this.selectedCameraEventId;
  }
}
