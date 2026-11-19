/*let marks = 50;
if (marks >= 35)
{
    console.log("you passed the examination");
}
else{
    console.log(" You failed the examination");
}

// program to check if the number is positve


const readline = require('readline');
const num = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


 const n = num.readline("Enter a number: ");
if (num > 0)
{
    console.log("The given number is +ve :", n);
}

    console.log("The given number is -ve:", n);


const number = 32;

// check if number is greater than 0
if (number > 0) {
    // the body of the if statement
    console.log("positive number");
}
else
console.log("nice number");

//-----------
*/
const prompt = require("prompt-sync")();
const score = Number(prompt("Please enter the score : "))
if (score >= 40)
    console.log("exam passed");
else
    console.log("Exam failed");


