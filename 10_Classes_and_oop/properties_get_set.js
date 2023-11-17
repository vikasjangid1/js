// function base object property define

function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{ // in old times getter and setter property will be use by defineProperty in function and in parameters , 1st is current context for object and 2nd is property and 3rd is {} object
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })  

    Object.defineProperty(this,'password',{ 
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })  
}

const chai = new User("chai@chai.com","chai")

console.log(chai.email);