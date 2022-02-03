const months = ["jan", "march", "April", "june", "july"];
const indexOfMonths = months.indexOf("march");
let arr3 = months.push("navya", "kavya", "meena");
console.log(arr3);
console.log(months);

const array1 = [36, 49, 25, 64, 81];
// const array2 = array1.map((eleme, index, arr) => Math.sqrt(eleme));

// let arr2 = array1
//   .map((cur) => {
//     return cur * 2;
//   })
//   .filter((curElem) => {
//     return curElem > 50;
//   });
// console.log(arr2);
let arr2 = array1.map((cur) => cur * 2).filter((cur1) => cur1 > 54);
console.log(arr2);
