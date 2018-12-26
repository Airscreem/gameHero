import { Warrior, Paladin } from './heroes';
import { Axe, Sword } from './weapons';

import { paladinStats, warriorStats } from './const/hero.config';
import { swordStats, axeStats } from './const/weapon.config';

const warrior = new Warrior(warriorStats);
const paladin = new Paladin(paladinStats);

const sword = new Sword(swordStats);
const axe = new Axe(axeStats);

paladin.setWeapon(axe);


paladin.strike(warrior);
paladin.strike(warrior);
paladin.strike(warrior);
