const accountId = 23;
let accountEmail = "vikas@gmail.com"
var accountPassword = "234";
accountCity = "jaipur";
let accountState; 

// accountId = 2; // not allowed

accountEmail = "aja@gmail.com"
accountPassword = "124323"
accountCity = "Bengaluru"
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope  
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])