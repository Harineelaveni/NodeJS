// Javascript data Types
let fruit = 'apple';
console.log(fruit);

let country = 'USA';
console.log(country);

let result = 'fail';
console.log(result);

let integer_number = -3;
console.log(integer_number);

let float_number = 3.123;
console.log(float_number);

// bigint value

let value1 = 9000000323252355n;
let result1 = value1 + 1n;
console.log(result1);

// boolean 

 let datach = true;

 console.log(datach);

 // undefined

  let name;
  console.log(name);   //--  undefined  value for the variable name

  // define null value  

  let net = null ;
  console.log (net);

//symbol primetive data type

const val1 = 'hey';
const val2 = 'hey';
console.log(val1 === val2);    // output is true

//by using symbol

const vag1 = Symbol('hey');
const vag2 = Symbol('hey');
console.log(vag1 === vag2);    // output is false

// creating Symbol

const c = Symbol()
typeof c;  //  -- it doesn't display the typeof c ;  the o/p should be the Symbol

// pass the value into the Symbol function

const c1 = Symbol('hello');
console.log(c1);                       // the o/p is Symbol(hello)

//  Access Symbol description

console.log(c1.description);     // o/p is hello

// Add Symbol as an Object key

  let id = Symbol("big");
  let person = {
                 name : 'Jack', 
                [id] : 123
               };
  console.log(person);      //  o/p -- { name: 'Jack', Symbol(id): 123 }
  console.log(id.description);     // o/p  -- big
 console.log(person[id]);          // o/p  -- 123

 //  Symbols are no incuded in for...in loop

   let id = Symbol("id");
   let person = { 
       name : "Jack",
       age : 25,
       [id] : 12
   };
 // using for ... in

  for (let key in person)
  {
     console.log(key);
  }
  console.log(person[id]); 
  console.log(person['name']);
  console.log(person.name);
  console.log(person['age']);
  console.log(person.age);
 // Using Symbols in Object


  
const id = Symbol('Userid');
console.log(id);
console.log(id.description);

const usr = {};

 Object.defineProperty(usr, "sal", {
  value : 5000,
  enumerable : true
 });

  console.log(Object.keys(usr));
  console.log(usr.sal);
  
  // how can check the data type of variable?

  let name= "Ram";
  console.log(typeof(name));

  let b= 25;
  console.log(typeof(b));

  let c = null;
  console.log(typeof(c)); // by default that typeof returned Object for the NULL




