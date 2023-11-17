// this = object

const user = {
    username: 'Vikas',
    loginCount: 8,
    signedTn: true,
    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}



// console.log(this)
// console.log(user.username)
// console.log(user.getUserDetails())

// const promiseOne = new Promise() // new keyword use to create new context and called as constructor function
// const date = new Date();

function User(username,loginCount,isLoggedIn){
    this.username = username;  // here we are storing values into our created variable using this and why we are using coz we want to store with same name variable
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function(){
        console.log(`Welcome${this.username}`)
    }
    return this;
    // return this;   // it will return automatically when you don't use this keyword
}

// const userOne = User("vikas",12,true)
// const userTwo = User("Chai",11,false) // here usertwo overwrite the things
// console.log(userOne)

const userOne = new User("vikas",12,true)
const userTwo = new User("Chai",11,false) 
console.log(userOne.constructor) // here it will refer it's own property 
// console.log(userTwo)


// explaination from 23 line
// new = constructor function  
// step1 - new keyword create a instance(copy) of an reference which one is actually a empty object
// step2 - then new keyword call the constructor function and collect the all arguments in it
// step3 - and then it will injected into function
// step4 - finally it will return through function

