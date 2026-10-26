// Primitive(These are call by value)

// 7 types: String, Number, Boolean, null, undefined, Symbol(To create anything unique), BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);// false

const bigNumber = 344567896n



// Reference Type( Non Primitive)

// Array, Objects, Functions


const heroes = ["shaktiman", "naagraj", "doga"] // Array

let myObj = {
    name : "Kanav",
    age: 20,
}                   // Objects are defined under curly braces

const myfunction = function(){
    console.log("Hello world");
}


console.log(typeof outsideTemp); // object



