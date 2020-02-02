import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import CameraEvent from '../models/camera-event';
import { CAMERA_EVENT_TYPE_ICONS } from '../camera-event.constants';

@Component({
  selector: 'app-camera-event',
  templateUrl: './camera-event.component.html',
  styleUrls: ['./camera-event.component.scss']
})
export class CameraEventComponent implements OnInit {
  @Input() item: CameraEvent;
  @Input() selected: boolean;
  @Output() itemClick = new EventEmitter<CameraEvent>();

  constructor() { }

  ngOnInit() {
  }

  onItemClick() {
    this.itemClick.emit(this.item);
  }

  get itemIcon(): string {
    return CAMERA_EVENT_TYPE_ICONS[this.item.type];
  }
}
