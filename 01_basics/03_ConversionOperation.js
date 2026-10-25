let score = "33qbc"

//console.log(typeof score); // string
//console.log(typeof(score)); // string


let valueInNumber = Number(score)
//console.log(typeof valueInNumber); // number

//console.log(valueInNumber) // NaN, so in JS also check then value given as input


// "33" => 33
// "33abc"=> NaN
// true => 1

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLggedIn)
//console.log(booleanisLoggedIn); // true

// 1=> true , 0= false
// "" = false
// "kanav" = true


let someNumber = 33

let StringNumber = String(someNumber)
//console.log(stringNumber); // 33
//console.log(typeof stringNumber) // string


// ************* Operations ***********

let value = 3
let negvalue = -value
console.log(negvalue); // -3

let str1 = "hello"
let str2 = " Kanav"
let str3 = str1+ str2
console.log(str3); // hello Kanav

console.log("1" + 2) ;// 12
console.log(1 + "2"); // 12

console.log("1"+ 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101

