const animals = ["lion", "cat", "dog", "elephant", "zeebra", "tiger"];
let newArr = animals.map((curELe, index, arr) => {
  return `index no= ${index} and the value is   ${curELe} belongs  tso ${arr}`;
});
console.log(newArr);
let newArr1 = animals.forEach((curELe, index, arr) => {
  return `index no= ${index} and the value is   ${curELe} belongs  tso ${arr}`;
});

console.log("this is foeeach elements" + newArr1);
