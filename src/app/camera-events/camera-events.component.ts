import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import CameraEvent from './models/camera-event';

@Component({
  selector: 'app-events',
  templateUrl: './camera-events.component.html',
  styleUrls: ['./camera-events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CameraEventsComponent implements OnInit {
  events$: Observable<CameraEvent[]>;

  constructor() { }

  ngOnInit() {
  }

}
