import { generateUUID } from '../../dashboard/dashboard.utils';
import { CameraEventTypes } from '../camera-events.interface';

export default class CameraEvent {
  id: string;
  timestamp: number;

  constructor(public cameraId: string, public lat: number, public lon: number, public type: CameraEventTypes) {
    this.id = generateUUID();
    this.timestamp = new Date().getTime();
  }
}
