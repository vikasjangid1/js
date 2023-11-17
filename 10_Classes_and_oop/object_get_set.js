// object based property define

const User = {
    _email: 'h@hc.com',  // _ underscore define property as a private and not by in normal person
    _password: 'abc',

    get email(){  // private property doesn't effect on get set method and it overwrites the property and it will
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// factory function
const tea = Object.create(User)
console.log(tea)