class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){  // here static will stop to access to that object where we are injecting 
        return `123`
    }
}

const vikas = new User("vikas")
// console.log(vikas.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone","i@phone.com")
iphone.createId();