// reduce
// it will take two parameter (accumulator , current value) > in first iteration this loop will run on accum and curr. value according to you perform which actions on it and 1st time acc. will take initial value which we will define and give it into result . Then 2nd iteration will perform on acc. and current value and here acc. will define as last result value so like this cycle will run

// const myNums = [0, 2, 3];

// const sumWithMyNums = myNums.reduce((acc, currentValue) => {
//     console.log(`acc: ${acc} and CurVal: ${currentValue} `)
//     return(acc + currentValue)},12)

// console.log(sumWithMyNums)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,currVal)=> {return acc + currVal.price  },0)
console.log(priceToPay)