// scopes - block and global

// var c = 200;
let a = 340;

if(true){
    let a =  10
    const b = 20
    console.log("INNER: " , a)
    //  c = 30  // var works as a global scope and it updates value after declaring with same name var variable
}
// console.log(a)
// console.log(b)
console.log(a)

// in windows console and through node terminal it works differently for scopes