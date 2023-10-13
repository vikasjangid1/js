// Dates

let myDate = new Date(); // it will give current date and time
// console.log(myDate.toString()); // it will convert the date to string
// console.log(myDate.toDateString()); // it will give output in only date format
// console.log(myDate.toISOString()); // it will give date in ISO format
// console.log(myDate.toJSON()); // it will covert date into JSON format
// console.log(myDate.toLocaleString()); // it will give date and time
// console.log(myDate.toLocaleDateString()); // it will give only date
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0, 23) // personalized date 
// let myCreatedDate = new Date(2023, 0, 23, 5,3) // with time
// let myCreatedDate = new Date ("2023-DEC-14");  // specific date 
let myCreatedDate = new Date ("JUN-14-2023");  // specific date according to indian standard as mm-dd-yyyy
let myTimeStamp = Date.now(); // it will give time in milliseconds from counting 1/1/1970



// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // the milliseconds counted from 1 jan 1970 to jun 14 2023 will be shown in output
// console.log(Math.floor(Date.now()/1000)); // it will convert milliseonds into seconds


let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time...`
let weekDay = newDate.toLocaleString('default',{
    weekday: 'long',
}
)

console.log(weekDay)