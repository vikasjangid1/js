

function sayMyName() {  // declaration of function
    console.log("V");
    console.log("I");
    console.log("K");
    console.log("A");
    console.log("S");
}

// sayMyName // reference of function 
// sayMyName(); // execution of function

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2) ;
// }

// in function after return keyword nothing will execute  

function addTwoNumbers(number1,number2){
    // let result = number1 + number2 ;
    // return result;
    return number1 + number2;
}

// console.log(addTwoNumbers(3, 5));


function loginUserMessage(username = "vikas"){
    if(!username){
        console.log("please enter a username")
        return 
    }
    return (`${username} just logged in`)
}


// console.log(loginUserMessage()) // when you pass nothing while calling function it will return undefined


function calculateCartPrice(val1,val2,...num1){
    return num1;
}

// rest operator ... can be used while one or more value passes in single parameter then it will create a bundle of values 
// console.log(calculateCartPrice(200,400,500,9))


// to pass a object in function 
const user = {
    username: "vikas",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username:"sam",
    price:199
})

// to pass a array in function
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return(getArray[1])
}

// console.log(returnSecondValue([23,234,2354,23]))
console.log(returnSecondValue(myNewArray))