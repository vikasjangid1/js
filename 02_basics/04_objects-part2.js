// const tinderUser = new Object(); // singleton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser) // it will give output in empty object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "vikas",
            lastName: "jangid"
        }
    }
}

// console.log(`my name is ${regularUser.fullname.userFullname.firstName} ${regularUser.fullname.userFullname.lastName} `)

// merge the objects

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj3 = { 5: "a", 6: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4) // to merge the object the syntax is object.assign(target,source) here target is to return value in object and source is which objects to add in target but without {} is will target the 1st source object by adding other source objects 
// console.log(obj1)
// console.log(obj3 === obj1) // to compare the value in between target object and 1st source object

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)

const users = [
    {
    id: 1,
    email: "h@gmail.com"
    },
    {
    id: 1,
    email: "h@gmail.com"
    },
    {
    id: 1,
    email: "h@gmail.com"
    }
];

// console.log(users[0].id)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // when we want the object keys then it will return in array in elements as strings
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) // to seprate each key-value in single array element in hole array
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // to check the is key-value exist in object by giving result in boolean


//de-structuring objects 

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "vikas"
}

// console.log(course.courseInstructor)

//object destructuring or 2nd method to get object property 
const {courseInstructor: instructor} = course; // syntax  "var {object key} = objectname"
console.log(instructor);

//JSON

// {
//     name: "vikas",
//     coursname: "js in hindi",
//     price: "free"
// }



// [
//     {},
//     {},
//     {}
// ]