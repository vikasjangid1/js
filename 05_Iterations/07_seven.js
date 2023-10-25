const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num) => num + 10)

const newNums = myNumbers
.map((num) => num*10)
.map((num) => num+1)
.filter((num) => num >= 40) // it is called as chainling when you try use multiple method in single statement
console.log(newNums);

// how chaining works it solves the previous method solve it and forward into next method with updated method and this sequence continues