
import {Ghost} from './TheUselessGhost.js';
import {Witch} from './witch.js';
import {Deadite} from './Deadite.js';
import {Werewolf} from './JS_werewolf.js';
import {Karen} from './Karen.js';
import {Peter_Griffin} from './Peter Griffin.js';
import {UnmatchedPowerOfTheSun} from './SUN.js';
import {Dracula} from './class Dracula.js';
import {Zombie} from './zombie.js'
let x1;
let y1;
let x;
let y;
var FightTotal = 1;
var FightTotal2 = 1;

let mon = [
    new Ghost,
    new Witch,
    new Deadite,
    new Werewolf,
    new Karen,
    new Peter_Griffin,
    new UnmatchedPowerOfTheSun,
    new Dracula,
    new Zombie
];

class Dice {
    constructor() {

    }

    rollDice() {
        
        this.face = Math.floor(Math.random() * 20) + 1; // randomly get number 1-6
        console.log ("rolling dice: " + "a " + this.face + "!");
        return this.face;
    }
}

let aDice = new Dice();
let bDice = new Dice();

function MonRandom() {
    x = Math.floor(Math.random() * 9)
    y = Math.floor(Math.random() * 9)
    console.log(mon[x]);
    console.log(mon[y]);
    
}
    
function fightMonsters(x,y,FightTotal,FightTotal2) {

    let mh = mon[y].health
    let ma = mon[x].damage
    let mh2 = mon[x].health
    let ma2 = mon[y].damage

while(FightTotal > 0, FightTotal2 > 0) {
    let m1Roll = aDice.rollDice();
    let m2Roll = bDice.rollDice();

   if (m1Roll ==  m2Roll) {
        console.log('WHAT HAPPENED????');
    } else if (m1Roll > m2Roll ) {
        return FightTotal = mh - ma;
    } else  {
        return FightTotal2 = mh2 - ma2;
    }
    }
    console.log(FightTotal);
    console.log(FightTotal2)
}
MonRandom(x1,y1);
fightMonsters(x,y,FightTotal,FightTotal2);
