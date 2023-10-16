// 2 types of declare objects in js

// singleton - means if you create a object thorugh constructor then it is define as only 'type of singleton object'  

// object literals -  if you make a object thorugh literals then it has become multiple instances

// Object.create (this type will be declare as constructor)

const mySym = Symbol("key1") // declare a symbol
const jsUser = {
    name: "vikas",
    "fullName": "vikasjangid",
    age: 23,
    location: "Jaipur",
    email: "vikasjangid.dev@gmail.com",
    [mySym]: "mykey1", // to use/create a symbol in objects 
    isLoggedIn: false,
    lastLogInDays: ["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// console.log(jsUser["email"])  // to access the value of object should call as string coz of keys are treat as string in objects 

// Object.freeze(jsUser) // to lock the values of objects
jsUser.age = "fg";  // to modify the value of object keys

// console.log(jsUser)  

//if you call the object and symbol declared [key] then output will be shown as symbol key otherwise key is treated as normal string key

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    return(`Hello js user, ${this.name}`);  
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

// if you call the function in object without() then it will give reference of function and with () it will be treated as proper function 