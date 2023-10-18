const userEmail = [];

// if(userEmail){ // here this conditon will assume that this var. match the value
//     console.log("got user email")
// }
// else {  // like if we use empty "" string that it will assume that this value is false 
//     console.log("Don't have user email");
// }

// empty "" will assume as false and empty [] will assume as true


// falsy values
// false , 0 , -0, BigInt 0n, "" , null , undefined , NaN

// truthy values 
//  "0" , 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("array is empty")
// }

const emptyObj = {a:3}
// if(Object.keys(emptyObj) === userEmail){
//     console.log("array is empty")
// }

// if(Object.keys(emptyObj).length === 1){
//     console.log(`object is empty`)
// }

// some conditions

// false == 0   ==> true
// false === 0 ==> false
// false == '' ==> true
// 0 == '' ==> true
// [] == [] ==> false
// [] === [] ==> false

// function(){} called as empty function

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10;       // 5
// val1 = null ?? 10;    // 10
val1 = undefined ?? 15;  // here it will assign 1st real value
val1 = null ?? 10 ?? 15  // here it will assign 1st real value = 10


console.log(val1)
// ?? this operator will almost assign first value in between two values to a variable but if you check in between null and other value then compiler will check according to its safety purpose and assign the real value

//  ternary operator

// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("less than 80") : console.log("More than 80")