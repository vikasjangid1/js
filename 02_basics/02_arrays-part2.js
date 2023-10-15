const marvelHeroes = ["thor","Ironman","spiderman"];
const dcHeroes = ["superman","flash","batman"];


// marvelHeroes.push(dcHeroes)  // when you push the hole array to new array then it will add as a single element on next index in new array
// console.log(marvelHeroes)
// console.log(marvelHeroes[3][1])

// const allHeroes = marvelHeroes.concat(dcHeroes) // when you concat the element to new array then it will add new element in old array and returns into new array and it takes only single parameter
// console.log(allHeroes)

//spread operator
// const allNewHeroes = [...marvelHeroes,...dcHeroes]
// console.log(allNewHeroes)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realAnotherArray = anotherArray.flat(Infinity) // it will remove the depth into array according to in array , the more array element will be converted into single array and in parameter we have to use depth size in no.'s and can be used infinity
console.log(realAnotherArray);

console.log(Array.isArray("Vikas")) // it will check the parameter value is this array or not
console.log(Array.from("Vikas")) // it will create array from parameter value
console.log(Array.from({name: "vikas"})) // it will create an empty array from parameter value if doesn't convert into array 


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)) // it will create the multiple values/variables into single array 
