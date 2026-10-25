console.log( 2 > 1);
console.log("02" > 1); // true, but make sure that before comparing datatype of bothy should be same

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true, This is because that equality check (==) treat null as null whereas comaparisons(>,<,<=,>=) treats null as 0

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === // strict checks

console.log("2" === 2); // 