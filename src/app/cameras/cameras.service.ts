import { Injectable } from '@angular/core';
import Camera from './models/camera';
import { cloneDeep } from 'lodash';
import { initialCameras } from './cameras.stub';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {

  constructor() { }

  loadCameras(): Camera[] {
    return cloneDeep(initialCameras);
  }
}
