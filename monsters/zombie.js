 export class Zombie {
    constructor() {
        this.health = 100;
        this.sound = "arrhh!"
        this.damage = 0;
        console.log ("New Zombie created...")
    }
}

let z1 = new Zombie();