// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5 ){
//         console.log("5 is the best number")
//     }
//     console.log(element)
// }

// for (let i = 1; i <=10; i++) {
//     console.log(`Outer loop value: ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value: ${i} and inner loop ${i}`)
//         console.log(i + '*' + j + ' = ' + i*j  );
//     }
// }

// let myArray = ['flash','batman','superman']
// console.log(myArray.length)
// for (let i = 0; i <= myArray.length; i=i+1) {
//     const element = myArray[i];
//     console.log(element)
// }

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i === 5){
//         console.log(`Detected 5`)
//         break;
//     }
//     console.log(`Value of i is ${i}`)
// }

for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${i}`);
}

let array = [];
let array2 = [];

for (let k = 1; k < 10; k++) {
    for (let i = 0; i < 3; i++) {
        array[i] = [];
        for (let j = 0; j < 3; j++) {
            array2[j] = k;
            break;
        }
    }
    array[i] = array2;
}
console.log(array);
// [[1,2,3],[4,5,6],[7,8,9]]
