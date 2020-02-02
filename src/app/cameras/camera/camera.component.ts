import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import Camera from '../models/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  @Input() item: Camera;
  @Input() selected: boolean;
  @Output() itemClick = new EventEmitter<Camera>();
  constructor() { }

  ngOnInit() {
  }

  onItemClick() {
    this.itemClick.emit(this.item);
  }
}
