import CameraEvent from '../camera-events/models/camera-event';
import Camera from '../cameras/models/camera';

export interface GoogleMapOptions {
  lat: number,
  lon: number,
  zoom: number,
}

export enum MarkerAnimations {
  "DROP" = "DROP",
  "BOUNCE" = "BOUNCE",
  "DEFAULT" = "",
}

export type MapMarker = Camera | CameraEvent;
