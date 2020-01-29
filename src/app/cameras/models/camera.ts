export default class Camera {
  id: number;

  constructor(public name: string, public position: Position) {
    this.id = new Date().getTime();
  }
}
