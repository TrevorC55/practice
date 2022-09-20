/*
const lizard = {
    animalName: "Lizlord",
    animalSound: "ALL HAIL THE LIZLORD",
    animalAge: "Infinity"
}
*/
//let notcatJSON = JSON.stringify(lizard);

let fs = require('fs');
//fs.writeFile("lizardJSON.json",notcatJSON,() => {});

fs.readFile("lizardJSON.json",'utf8', (err, data) => {  
    if (err) {
        console.error(err);
        return;
  }
  console.log(data);
  const lizardJSON = JSON.parse(data);
  console.log(lizardJSON)
});
