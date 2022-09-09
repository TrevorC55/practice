let pyear = 0;
let dyear = 0;

const { write } = require("fs");
const { stringify } = require("querystring");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("How old are you? ", function (pyear) {
    //pyear = ((Math.log(dyear)*16)+31);
    dyear = Math.exp(pyear);
  
    if (dyear = dyear > 0) {
    console.log(dyear);
  }
   console.log('This is your age ' + pyear);
    
    rl.close();
});

//(human_age = 16ln(dog_age) + 31)