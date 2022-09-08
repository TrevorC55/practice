let pyear = 0;
let dyear = 0;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("How old are you? ", function (pyear) {
    //pyear = ((Math.log(dyear)*16)+31);
    dyear = ((Math.pow(pyear, Math.E)/16)-31);
    console.log(dyear);
    //console.log('This is your age ' + pyears);
    
    rl.close();
});


//(human_age = 16ln(dog_age) + 31)