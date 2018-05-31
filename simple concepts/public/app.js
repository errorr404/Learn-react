"use strict";

/*

// es-5 method function
// method 1
var square = function (x) {
   return x*x;
};

console.log(square(5));

// method 2
function square1(x) {
  return x*x;
}
console.log(square1(10));

// es-6 method function

// method 1
const squareArrow = (x) =>{
  return x*x;
}
console.log(squareArrow(9));

// method 2
const squareArrow1 = (x) => x*x;

console.log(squareArrow1(15));

*/
// challange
// -use arrow functions
//getFirstName('Mike Smith') -> "Mike"
// create regular arrow function
// create arrow function using shorthand syntax
var getFirstName = function getFirstName(name) {
  return name.split(' ')[0];
};
console.log(getFirstName("Mike Smith"));
