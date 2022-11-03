import {Ghost} from './TheUselessGhost.js';
import {Witch} from './witch.js';
import {Deadite} from './Deadite.js';
import {Werewolf} from './JS_werewolf.js';
import {Karen} from './Karen.js';
import {Peter_Griffin} from './Peter Griffin.js';
import {UnmatchedPowerOfTheSun} from './SUN.js';
import {Dracula} from './class Dracula.js';
import {Zombie} from './zombie.js'

class Dice {
    constructor() {

    }

    rollDice() {
        
        this.face = Math.floor(Math.random() * 6) + 1; // randomly get number 1-6
        console.log ("rolling dice: " + "a " + this.face + "!");
        return this.face;
    }
}

//create the monsters
let casper = new Ghost();
let sabrina = new Witch();
let cDice = new Dice();
let sDice = new Dice();

    
function fightMonsters(m1, m2) {
    // function to create the monsters who will fight
    // passing in two monster objects as parameters

    let monster1 = m1;
    monster1.name = "Sabrina";
    let monster2 = m2;
    monster2.name = "Casper";

    let m1Roll = cDice.rollDice();
    let m2Roll = sDice.rollDice();

    if (m1Roll === m2Roll ) {
        console.log("it's a tie, roll again.")
    } else if (m1Roll > m2Roll) {
        console.log(monster1.name + " wins!"); 
    } else {
        console.log(monster2.name + " wins!")
    }


}

fightMonsters(casper, sabrina);