import { EventTypes } from '../cameras.interface';

export default class CameraEvent {
  timestamp: number;

  constructor(public cameraId: number, public position: Position, public type: EventTypes) {
    this.timestamp = new Date().getTime();
  }
}
