//ques. - why we can't change value of Math.PI in js and if we can than how is it possible
// we can manipulate that object's property can'be updated

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") // getOwnPropertyDescriptor will give hidden property of a object, in () 1st para. we are using which method and 2nd para. we are using property of that
console.log(descriptor)



// console.log(Math.PI)   // it is a universal constant
// Math.PI = 5; 
// console.log(Math.PI)

//creation of object
// const mynewObj = Object.create()
// const mynewObj = new Object()

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{  
    // writable: false,
    enumerable: true
}) 
// here we can update hidden properties of an object - there are 3 () parameters ,in 1st para. which obj., in 2nd which property, in 3rd what hidden property do you want to change

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key,value] of Object.entries(chai)) {  // here object.entries(chai) is make possible to iterate on object's entries
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}