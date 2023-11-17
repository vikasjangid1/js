class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){   // name will be same according to which property are you accessing
        return this._email.toUpperCase()
    }
    set email(value){  // in setter will never use return keyword
        this._email = value;   
    }
    get password(){   // if you want to get properties value from outside of class than use get method and both get and set will be used combinely
        return `${this._password}vikas`
    }
    set password(value){  // for use update value of properties and error thrown that maximum call stack size exceeded coz constructor and get-set both are setting values
        this._password = value // now this problem will be solved due to creating our username
    }
}

const vikas = new User("v@vikas.ai","123")
console.log(vikas.email)