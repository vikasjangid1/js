// let score = null; // it converts into 0 and type of number
// let score = "34" // it converts into number and type of number
// let score = "342s" // it converts into NaN and type of number
// let score = undefined; // it converts into NaN and type of number
// let score = NaN; //it converts into NaN and type of number
// let score = true; //it converts into 1 and type of number
// let score = "vikas"; //it converts into NaN and type of number
// console.log(typeof score);


// "33" => 33
// "33a" => NaN
// true => 1; false => 0;


// let valueInNumber = parseInt(score);
// let valueInNumber2 = Number(score);
// console.log( valueInNumber2);



// let isLoggedIn = "vikas"; 

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//1 => true; 0 => false
// "" => false
// "vikas" => true

// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof stringNumber)



// ************************ operations **********************
let value = 3;
let negValue = -value;
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3)
// console.log(2%3)

let str1 = "hello ";
let str2 = "vikas";
let str3 = str1+str2;
// console.log(str3)
// console.log ("1" + 2)
// console.log (1 + "2")
// console.log ("1" + 2 +2)
// console.log (2 +2 + "2")
// console.log((3+4)*5%3)

// console.log(true)  // gives true
// console.log(+true) // gives 1
// console.log(true+) // gives error
// console.log(+"");  // gives 0

// let num1, num2, num3 
// num1 = num2 = num3 = 2+2;
// console.log(num3)

let gameCounter = 100;
// gameCounter++; //postfix operator
// ++gameCounter; //prefix operator
console.log(++gameCounter);
