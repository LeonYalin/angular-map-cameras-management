import CameraEvent from './models/camera-event';

export interface CameraEventsMap {
  [key: string]: CameraEvent;
}

export enum CameraEventTypes {
  Accident = "Accident",
  Demonstration = "Demonstration",
  SuspiciousObject = "Suspicious object",
}
