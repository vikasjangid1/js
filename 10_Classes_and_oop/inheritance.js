class User{
    constructor(username){
        this.username = username;
    }
    logMe(){ //it will give the value of username
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{   // now all user functionality is available to teacher class using extends keyword , assumes that A LMS system is providing username and password
    constructor(username,email,password){
        super(username) // here super will refer that which class has to extend and pass the value
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@teacher.com","123")
chai.logMe()

const masalaChai = new User("masalaChai") 
masalaChai.logMe()


console.log(chai instanceof Teacher); // here we are checking that chai is instance of Teacher or not


