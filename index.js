// EXAMPLE 1 - Split a String on Capital Letters in JavaScript

const str = 'BobbyHadzCom';

const result = str.split(/(?=[A-Z])/);

// 👇️ [ 'Bobby', 'Hadz', 'Com' ]
console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Dealing with trailing spaces

// const str = 'Bobby Hadz Com';

// const result = str.split(/(?=[A-Z])/);

// // 👇️ [ 'Bobby ', 'Hadz ', 'Com' ]
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Defining a reusable function

// function splitOnCapital(str) {
//   return str
//     .trim()
//     .split(/(?=[A-Z])/)
//     .map(element => element.trim());
// }

// const str = ' Bobby Hadz Com ';

// const result = splitOnCapital(str);
// console.log(result); // 👉️ [ 'Bobby', 'Hadz', 'Com' ]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Split a String on Capital Letters using `String.match()`

// function splitOnCapital(str) {
//   return str
//     .trim()
//     .match(/([A-Z]?[^A-Z]*)/g)
//     .map(element => element.trim())
//     .filter(element => element);
// }

// const str = ' Bobby Hadz Com ';

// const result = splitOnCapital(str);
// console.log(result); // 👉️ [ 'Bobby', 'Hadz', 'Com' ]
