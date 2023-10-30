console.log("Gettin g started with events") 

// events are invoked on a activity


// onClick="alert(`owl`)" // this approach is not feasible as a scale wise when you define as in a attribute 

// best approach to handle event listener => .addEventListener('',)
// there are 3 parameters in event list.. 1st event name , 2nd anonymous function, 3rd false 
// some values won't work until you write false

// event propogation 
// event bubbling(false) - when js file tracks events according to inner element to outer element
// event bubbling(true) - when js file tracks event from top to bottom