const myArr = []
// %DebugPrint(myArr)


// 2 types of array - Continuous(Packed) , Holey 
// holey - means there are multiple ways of optimization elements 
// In each type of array, Js optimizes array elements accordingly
// once a manipulation in array will affect in array types , either you delete that element in array and js compiler will treat as its last changed array element type

// optimization of both type of array in 3 ways
// SMI (small integer)
// Packed element - means there is no holes in array 
// Double (float,string,function,...etc.)

const arrTwo = [1,2,3,4,5]
// PACKED_SMI_ELEMETS (best type of array)

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMETS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS


console.log(arrTwo) 
console.log(arrTwo.length)
console.log(arrTwo[19]) // it will give you undefined and it is costly operation

// js nature is prototypal because it will check again and again for what you are accessing

// procedure of accessing array elements
// 1 - bound check // means it will give the output in 'easy' according to outside of array length 
// 2 - hasOwnProperty(arrTwo,9) // it will check that Is an array element presents in that index?
// 3 - hasOwnProperty(arrTwo.prototype,10) // we are checking here element in array prototype
// 4 - hasOwnProperty(object.prototype,10) // is there any property you have created in object? 

// and thats why it is most expensive/costly check in js
// holes are very expensive in js


const arrThree = [1,2,3,4,5]
console.log(arrThree[2])

// highest optimized preference
// packed - SMI > DOUBLE > PACKED
// holey - H_SMI > H_DOUBLE > H_PACKED

// note - if any downgrade happens in an array then it is impossible to upgrade it

const arrFour = new Array(3)
// just 3 holes => HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_ELEMENTS
arrFour[1] = '2' //HOLEY_ELEMENTS
arrFour[2] = '3' //HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS

const arrSix = [1,2,3,4,5]

arrSix.push(Infinity)

// use these methods for better optimization in array
// for, for-of, forEach