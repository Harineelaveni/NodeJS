const prompt = require("prompt-sync")();

let a = Number(prompt("Enter the first value:"));
let b = Number(prompt("Enter the second value:"));
let temp;
temp = a;
a = b;
b = temp;
console.log("a value from b:", a);
console.log("b value from a :", b);