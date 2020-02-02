import { GeoLocation } from '../../cameras/cameras.interface';
import { generateUUID } from '../../dashboard/dashboard.utils';
import { CameraEventTypes } from '../camera-events.interface';

export default class CameraEvent {
  id: string;
  timestamp: number;

  constructor(public cameraId: string, public position: GeoLocation, public type: CameraEventTypes) {
    this.id = generateUUID();
    this.timestamp = new Date().getTime();
  }
}
