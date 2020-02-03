import { generateUUID } from '../../dashboard/dashboard.utils';

export default class Camera {
  id: string;
  selected = false;

  constructor(public name: string, public lat: number, public lon: number) {
    this.id = generateUUID();
  }
}
