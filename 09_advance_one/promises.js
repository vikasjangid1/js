const promiseOne = new Promise(function(resolve,reject){  // in the parameter passing by a callback function and it has 2 parameter , one is resolve , and second one is reject
    // do an async task
    // db task, cryptography, network 
    setTimeout(function(){
        console.log('Async task is complete')
        resolve() // now it is connected with .then and execute it after promise part execution
    },1000)
});  

promiseOne.then(function(){   // resolve parameter is connected with .then and it has callback function in parameter () and in fun. there is passed argument through promise's return 
    console.log("promise consumed")
})  



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolved")
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})   // mostly in resolve we are passing object but we can pass array , and functions also
    },1000)
})

promiseThree.then(function(user){  // and here we are getting that object in user
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"hitesh",password: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.username 
})
.then((username)=>{   // here we are adding a chain and passing into next .then()
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=> {console.log("The promise is either resolved or rejected")})   // .finally() gives output that is your promise is resolved or rejected , but it will run surely


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",password: "123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

// we can handle promise through async and await
// it will wait untill your current program executed and then run your next program

// async function consumePromiseFive(){
//     const response = await promiseFive  // it will handle value from .then or .catch
//     console.log(response)
// }

async function consumePromiseFive(){
    try {
        const response = await promiseFive  
        console.log(response)
    } 
    catch (error) {
        console.log(error)
    }
}
consumePromiseFive();

// in try - catch we can gracefully handle error rather than async- await


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')  // fetch is an object () in parameter we can add url
//         const data = await response.json()  
//         console.log(data)   
//     } 
//     catch (error) {
//         console.log(error)
//     }
// }
// getAllUsers()


fetch("https://api.github.com/users/vikasjangid")  // fetch will pass output in response
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})