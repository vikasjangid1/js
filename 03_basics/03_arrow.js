const user = {
    username : "vikas",
    price: 999,
    welcomeMessage (){
        // console.log((`${this.username} , welcome to website`)) // if you want to refer current context eg. in parenthesis{} and this keyword make current context reference
        // console.log(this) // this refer as current context
    }
}

user.welcomeMessage()
// console.log(typeof (user.welcomeMessage()))
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)  // here this refers in current file according to global context(variables)
// if you try to use in window then it refers as window object


function chai(){
    let username = "vikas"
    // console.log(this) // we can't use "this" as we use in object
}
chai()


// const chai = function (){
//     let username = "vikas"
//     console.log(this)
// }
// chai()


// const chai = () => {
//     let username = "vikas"
//     console.log(this.username)
// }
// chai()


//******************this keyword **************//

// this keyword in js is used to refer the object it belongs to
// In a method, this refers to the owner object
// Alone, this referst to the global object
// In a function, this refers to the global object
// In a function, in strict mode, this is undefined
// In a event, this refers to the element that received the event



//**********************Arrow Function********* */

// in arrow function this keyword don't rebind (mean work according to parent object) and on other hand in normal function this keyword rebind according to hole object and dont rely on parent object
// const addTwo = (num1,num2) => {
// return num1+num2; // explicit return called when we use return keyword in parenthesis
// }

const addTwo = (num1,num2) =>  ({username: "vikas"});   // implicit returns means in arrow function we can return without return keyword and parenthesis{} and it will execute atleast single line


// console.log(addTwo(3,4))



// const obj = {
//     username: "abf",
//     password: 13,
//     self: function() {
//         var self = this;
//         if(true){
//             console.log(self) ;
//         }
//     }
// }
// obj.self()


// const myArray = [2,342,43,4,2]
// myArray.forEach()