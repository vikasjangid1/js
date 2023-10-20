// for of loop 
// for of loop print the direct value of an object or array
const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num)
// }


// const greetings = "hello world!";
// for (const greet of greetings) { // here greet refer to that object where you want to iterate value , eg. here greetings.
//     console.log(`Each char is ${greet}`)
// }

// Maps
// map is a object which hold key- value pair and it also known for unique values
const map = new Map()
map.set('IN', 'India') // set method will set the value of map object in key value pairs
// map.set('IN', 'India') // it won't add this value 2nd time
map.set('USA', 'UNITED STATES OF AMERICA')
map.set('Fr', 'France')
// console.log(map)

for(let [key , value] of map) { // destructure of array and if you want to access map object then use [] by seprating key value pair
    // console.log(key+ ':-' + value)
}

const myObject = { // objects are not iterable by using for of loop
    game1 : 'NFS',
    game2  : 'Spiderman'
}

for(let [key,value] of myObject) {
    console.log(key+ ':-' + value) 
}