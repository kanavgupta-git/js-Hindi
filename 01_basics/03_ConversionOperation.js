let score = "33qbc"

console.log(typeof score); // string
console.log(typeof(score)); // string


let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number

console.log(valueInNumber) // NaN, so in JS also check then value given as input


// "33" => 33
// "33abc"=> NaN
// true => 1

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLggedIn)
console.log(booleanisLoggedIn); // true

// 1=> true , 0= false
// "" = false
// "kanav" = true


let someNumber = 33

let StringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber) // string
