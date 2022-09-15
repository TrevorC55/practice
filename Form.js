const fog = {
    RainToday: document.getElementById('text1'),
}


let RainJSON = JSON.stringify(fog);

let fs = require('fs');
fs.writeFile("RainJSON.json",catJSON,() => {});
