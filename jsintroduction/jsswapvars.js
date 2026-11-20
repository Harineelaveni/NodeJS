

const prompt = require("prompt-sync")();
const a = Number(prompt("Please enter the value of a : "));
const b = Number(prompt("Please enter the value of b : "));

        const temp = a;
        a = b;
        b = temp;

        console.log("a value from b:", a);
        console.log("b value from a :", b);
   