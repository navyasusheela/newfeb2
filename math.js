/***section 9 Math object in Javasript  */
//the javaScript Math object allows you to perform mathematical tasks on numbers
// console.log(Math.PI);
console.log(Math.round(Math.PI));

//Math.round()
//returns the value of x rounded to its nearest
let num = 10.256;
console.log(Math.round(num));
//Math.pow(x,y) return the x to the power of y
console.log(Math.pow(2, 4));
console.log(2 ** 4);
//Math.sqrt()
//Math.sqrt(X) returns  the square root of x
console.log(Math.sqrt(121));
console.log(Math.sqrt(144));

//Math.abs()
//Math.abs(x) returns the absolute (positive) values of x
console.log(Math.abs(-77));
console.log(Math.abs(4 - 8));

//Math.ceil()
//Math.ceil(x) returns the vlue of x rounded up to its nearest integer
console.log(Math.ceil(4.51));
console.log(Math.round(4.5));
console.log(Math.ceil(44.25));
console.log(Math.ceil(87.01111));
console.log(Math.round(88.0000254));
//Math floor()
//Math.floor(x) returns the value of x rounded down to its nearest int
console.log(Math.floor(7801.2));
console.log(Math.floor(49.99));

//Math.min() can be used to find the lowet value in alist of arguments
console.log(Math.min(48, 45, 25, 47, 84));

//Math.max() can be used to find the highest among the arguments
console.log(Math.max(47, 84, 59, 98, 94, 97));

//Math.random()
//Math.random() returns a random number between 0(inclusive) and 1(exclusive)

console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

//Math.trunc()
//the trunc() method returns the interger part of a number
console.log(Math.trunc(45454.254));
console.log(Math.trunc(-4454547.226978745413));

//** if th argument is a positive number,Math.trunc()is equivalent to Math.floor */
//**otherwise Marh.trunc() is equivalent to Math.ceil */
