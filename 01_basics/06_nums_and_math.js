////****************NUMBERS************************////


const score = 400; // it will just gives the output in number
// console.log(score);

const balance = new Number(100.345346) // it will specifies the value in number and differentiate as number in output 
// console.log(balance);

// console.log(balance.toString().length); // it will converts the value into string

// console.log(balance.toFixed(2)); // it will fix the value after decimal 

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // it will precise the value according to given input and value length will be decided by () in parameter and if possible it will round figure the value

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()) // it will add comas in between no.'s according to us standard
// console.log(hundreds.toLocaleString('en-IN')) //  from adding 'en-IN' it will convert it into 




////****************MATH************************////


// console.log(Math); 
// console.log(Math.abs(129.354)); // it only change the negative value to positive
// console.log(Math.round(4.5)); // it will round off the value 
// console.log(Math.ceil(23.2)) // it will change the value into big hole no 
// console.log(Math.floor(4.9)) // it will change the value into big hole no 
// console.log(Math.sqrt(25)) // it will cache the under square root
// console.log(Math.min(234,234,324121,23)) // it will give output in between lowest value
// console.log(Math.max(234,324121,324121,23)) // it will give output in between highest value

console.log(Math.random());
console.log((Math.random()*10) + 1) // we are adding to avoid 0 in output
console.log((Math.floor(Math.random()*10)) + 1); 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // we are using max and min cause of providing according to me and + 1 to avoid 0 and + min for getting above value

