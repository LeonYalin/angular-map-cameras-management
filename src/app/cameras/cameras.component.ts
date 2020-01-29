import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import Camera from './models/camera';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CamerasComponent implements OnInit {
  cameras$: Observable<Camera[]>;

  constructor() { }

  ngOnInit() {
  }

}
