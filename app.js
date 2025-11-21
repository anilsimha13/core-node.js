console.log("I am from App.js file");

const { add, multiply, division } = require("./arithmeticOperations");

const testData = require("./testData.json");
console.log(testData);
add(10, 20);
multiply(10, 20);
division(20, 10);
