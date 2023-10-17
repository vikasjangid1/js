// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE (when you name a function or block level things in ())
    console.log(`DB CONNECTED`)
})();
// when you dont want that global variables invoke in functions , then we will avoid polution scopes in function by using block with () and call after block() call with empty () , here 1st () is definition for function and 2nd () one for execution for that file and close the invoke execution with ;

( (name) => {
    // unamed iife (which one are anonymous)
    console.log(`DB CONNECTED TWO ${name}`)
})("vikas")
