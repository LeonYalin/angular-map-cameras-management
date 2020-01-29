import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Camera from '../cameras/models/camera';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  cameras$: Observable<Camera[]>;

  constructor() { }

  ngOnInit() {
  }

}
