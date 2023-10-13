// Primitive 

// 7 types : string , Number, Boolean , null , undefined, symbol , BigInt 

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTemp = null; // object
let userEmail; // undefined
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id > anotherId)
// const bigNumber = 23534543534552355345n; //bigInt

//console.log(typeof bigNumber)




// Non - Premitive / Reference Type

//Array , Objects, functions 

const heros = ["fkdsj", "fdhs"]

let obj = {
    name : "vikas",
    age : 23
}

// function funName(){}
// const fun = function(){
//     console.log("helloworld")
// }
// console.log(typeof fun)



// *****************************************

// Stack(primitive), Heap (Non - primitive)

let myYoutubeName = "vikasjangid"

let anothername = myYoutubeName

anothername = "chaiaurcode"

// console.log(anothername)
// console.log(myYoutubeName)


let userOne  = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "abc@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)