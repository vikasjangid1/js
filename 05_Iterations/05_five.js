// for each
// const coding = ['js','ruby','java','python','cpp']

// in for each () in parenthesis we have to use a callback function which has no name (without name) and in () parameters we can assume a name and it will take value from particular array item
// coding.forEach( function (item){
//     console.log(item )
// })


// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)  // here just reference the function without () excuting it,and here printMe function called as parameter and it is functioning according to its definition by taking as parameter

// coding.forEach((item,index,arr) => { // it can get 3 parameters in a row of array as arrayitem, arrayindex,and arraylist
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((name) => {console.log(name.languageName)})