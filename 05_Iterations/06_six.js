// const coding = ['js','ruby','java','python','cpp']

// let values = coding.forEach( (item)=>{  // for each doesn't return any value so we can't store it in a variable
//     console.log(item);   
//     return item; 
// })

// console.log(values)

//filter
// it will return (counted as sorting) if codition is true in the parameter

const myNums = [1,2,3,4,5,6,7,8,9,10]

// let returnValue = myNums.filter((num) => {
//     return num>4
// })   // filter also use callback function in () and it returns some value according to filter we apply
// in filter we have to remember if we are using arrow function with () => then in single line without {} curly braces we can use without return but with {} we have to use return keyword
// console.log(returnValue)

// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//     newNums.push(num)
//     }
// })
// console.log(newNums) 


const book = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = book.filter((bk) => bk.genre > 'History')
userBooks = book.filter((bk) => bk.publish >= 1995)
userBooks = book.filter((bk) => bk.publish >= 1995 && bk.genre === 'History')

console.log(userBooks)