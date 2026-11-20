

const prompt = require("prompt-sync")();
let a = Number(prompt("Please enter the value of a : "));
let b = Number(prompt("Please enter the value of b : "));

        let temp = a;
        a = b;
        b = temp;

        console.log("a value from b:", a);
        console.log("b value from a :", b);
   