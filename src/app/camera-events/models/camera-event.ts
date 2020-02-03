import { generateUUID } from '../../dashboard/dashboard.utils';
import { CameraEventTypes } from '../camera-events.interface';
import {CAMERA_EVENT_MAP_ICONS} from '../camera-event.constants';

export default class CameraEvent {
  id: string;
  timestamp: number;
  iconUrl: string;

  constructor(public cameraId: string, public lat: number, public lon: number, public type: CameraEventTypes) {
    this.id = generateUUID();
    this.timestamp = new Date().getTime();
    this.iconUrl = CAMERA_EVENT_MAP_ICONS[type];
  }
}
