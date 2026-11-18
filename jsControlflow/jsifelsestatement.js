let marks = 50;
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


const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
    // the body of the if statement
    console.log("positive number");
}

console.log("nice number");

//-----------

const readline = require("node:readline/promises");

async function main() {
    const input = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const answer = await input.question("Enter a number: ");
    input.close();

    const number = Number(answer);

    if (number > 0) {
        console.log("The given number is positive:", number);
    } else {
        console.log("The given number is not positive:", number);
    }
}

main();