function setUsername(username){
    //complex DB calls
    this.username = username;
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this, username)  // .call => for explicit call in function to another function we are calling. In simple words for holding it reference after inner function execution , in call method () in 1st parameter , written as (this,) coz of we are referencing the execution context and passing current context

    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123") // here we are creating object
console.log(chai)