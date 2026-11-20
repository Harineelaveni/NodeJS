// Display numbers  from 0 to 3

let i = 0;
while (i  < 4)
{
    console.log(i);
    i += 1;
}

//  sum of positive numbers
const prompt = require('prompt-sync')();
let num = 0, sum = 0;
while (num >=0)
{
    sum +=num;
    num = parseInt(prompt('Enter the number :', num));
}
console.log('The sum  is: ', sum);

// Display the numbers from 3 to 1 by using do while

let x = 3;
do
{
  console.log(x);
  x -= 1;  
}

while (x > 0)

// Sum of positive numbers by using do while statement    

// const prompt= require('prompt-sync')();
let a = 0, s = 0;
do{
    s += a;
    a = parseInt(prompt("Enter the value of a :"));
    
}
while (a >= 0)
    console.log('the sum is :', s);