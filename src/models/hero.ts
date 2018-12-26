export class Hero {
  config: any;
  class: string;
  damage: number;
  armor: number;
  hp: number;
  availableWeapon: any[];

  /* @config - начальное состояние */
  constructor(config) {
    this.config = config;

    this.class = config.class;
    this.damage = config.damage;
    this.armor = config.armor;
    this.hp = config.hp;
    this.availableWeapon = config.availableWeapon;
  }

  /* Установка оружия */
  setWeapon(weapon): void {
    if (this.isAvalaibleWepaon(weapon)) {
      console.warn(`${this.class} dont can set ${weapon.class}`);
      return;
    }

    console.warn(`${this.class} take weapon ${weapon.class} ... Damage: ${this.damage}`);
    this.damage += weapon.damage;
  }

  /* Удар по врагу */
  strike(enemy): void {
    if (this.isDead()) {
      console.warn(`${this.class} dont hit ${enemy.class}, coz he dead`);
      return;
    }

    console.warn(`${this.class} is attacking ${enemy.class}...`);
    enemy.takeDamage(this.damage - enemy.armor);
  }

  /* Получение урона, просчет хп */
  takeDamage(value: number): void {
    this.hp -= value;
    console.warn(`${this.class} HP: ${this.hp}.`);

    // if (100 / this.config.hp * this.hp <= 50 && !this.isDead()) this.drinkExtract();

    this.isDead() && console.warn(`${this.class} is dead`);
  }

  // drinkExtract() {
  //   console.warn(`${this.class} drink healing extract...`);
  //   this.hp = this.config.hp;
  // }

  /* Проверка состояние здоровья */
  isDead(): boolean {
    return this.hp <= 0;
  }

  /* Проверка на ношение оружия */
  isAvalaibleWepaon(weapon): boolean {
    return this.availableWeapon.indexOf(weapon.class) <= -1;
  }
}
