export class Weapon {
  class: string;
  damage: number;

  constructor(config) {
    this.class = config.class;
    this.damage = config.damage;
  }
}
