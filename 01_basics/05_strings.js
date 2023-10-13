const name = "vikas";
const repoCount = 10;

// console.log(name + repoCount + "value") // now this type of concatenation is outdated


// console.log(`hello my name is ${name.toUpperCase()} and i have ${repoCount} repo's`) // this syntax is more readable
// this is called as string interpolation

// another way to declare strings

const gameName = new String("vikas-vj-fdg-g") // here new keyword create the new object and when we check its type it reffered as object 
// console.log(gameName.__proto__) // here proto is the standard procedure to get method of a string or array
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("v"))

const newString = gameName.substring(0,4) // in substring we can't use value in negatives
// console.log(newString)
const newString2 = gameName.slice(-7,5) // in slice we can start value from negative values and it will cut the string from back counting 
console.log(newString2)

const newStringOne = "  vikas  "
console.log(newStringOne)
console.log(newStringOne.trim()) // it will remove the starting and ending white blank space in string

const url = "https://vikas.com/vikas%20jangid"

console.log(url.replace('%20','-')) // in first value what we have to remove and in second value what we want to remove

console.log(url.includes('ck')) // it will give output in boolean if its matching value in string

console.log(gameName.split(' ')) // it will split the string to according separator