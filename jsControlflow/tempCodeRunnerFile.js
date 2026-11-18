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