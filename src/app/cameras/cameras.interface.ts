import Camera from './models/camera';

export interface GeoLocation {
  lat: number,
  lon: number,
}

export interface CamerasMap {
  [key: string]: Camera;
}
