const fog = {
    animalName: document.getElementById('text1'),
    animalSound: "meow",
    animalAge: 11
}


let catJSON = JSON.stringify(fog);

let fs = require('fs');
fs.writeFile("catJSON.json",catJSON,() => {});
