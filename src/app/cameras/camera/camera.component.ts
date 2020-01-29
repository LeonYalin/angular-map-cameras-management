import { Component, OnInit, Input } from '@angular/core';
import Camera from '../models/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  @Input() camera: Camera;
  constructor() { }

  ngOnInit() {
  }

}
