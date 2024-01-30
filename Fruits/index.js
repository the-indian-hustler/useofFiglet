//index.js is a special file which combines the data from all other files and then exports them to the required place
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./apple");

let fruits = [apple, banana, orange];

module.exports = fruits;