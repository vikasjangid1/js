// let myName = "vikas     "
// let myChannel = "Chai   "

// console.log(myName.trueLength);

// factory function => .create  (bydefault function which one is help for creating things)

let myHeroes = ['thor','spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.vikas = function(){ // mostly when we have to inject something will use .prototype with datatype (eg.- Object,Array) keyword
    console.log(`vikas is present in all objects`)
}

Array.prototype.heyVikas = function(){
    console.log(`Vikas says hello`)
}

// heroPower.vikas()
// myHeroes.vikas()
// myHeroes.heyVikas()
// heroPower.heyVikas()




// inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TA = {
    makeAssignment: 'JS assignment',
    fullTime : true,
    __proto__: TeachingSupport // here we are doing inheritance from another object
}

Teacher.__proto__ = user  // it is called as prototyal inheritance

//modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(TeachingSupport.makeVideo)
// console.log(Object.setPrototypeOf(TeachingSupport, Teacher))  // here 1st object can be access properties from 2nd object

let anotherUsername = "ChaiAurCode   "  
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is: ${this.trim().length}`)
}    

anotherUsername.trueLength()
"Vikas".trueLength()
"iceTea".trueLength()