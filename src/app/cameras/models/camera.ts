import { GeoLocation } from '../cameras.interface';

export default class Camera {
  id: number;

  constructor(public name: string, public position: GeoLocation) {
    this.id = new Date().getTime();
  }
}
