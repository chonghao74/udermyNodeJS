let moduleTry1 = require("../js/moduletry1");
let moduleTry2 = require("../js/moduletry2");
let moduleTry3 = require("../js/moduletry3");

let inputName = "Tim";
let inputTel = "0988777777";
moduleTry3();

moduleTry1.showNameLog(inputName);
moduleTry1.showTelLog(inputTel);
moduleTry2.night(inputName);
console.log("Object ");
console.log(moduleTry1);
console.log("Object ");
console.log(moduleTry2);
console.log("Function ");
console.log(moduleTry3);