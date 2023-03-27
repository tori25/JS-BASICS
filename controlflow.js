//  switch
//  switch (role) {
//  case "moderator":
//  console.log("Moderator user!");
//  break;

//  case "guest":
//  console.log("Guaest user!");
//  break;

//  deafult: console.log("No acces!");
//  }

//  for
//  for (let i = 0; i < role.length; i++) {
//   console.log("Role");
//  }

//  while
//  while (b <= 10) {
//    console.log("Do something!");
//  }

// do...while
// let c = 9;
// do {
//   console.log("Do something while ...");
// } while (c <= 9);

// for - in  trough objects
// const person = {
//   name: "Vera",
//   age: 32,
// };
// for (let key in person) console.log("Do something");

// for - of trough array
// const colors = ["green, red, yellow, blue"];
// for (let color of colors) console.log("Do something with" + color);

// max of two numbers
// let number = max(2, 3);
// console.log(number);

// function max(a, b) {
//   a > b ? a : b;
// }

// landscape or portraite
// console.log(isLandscape(300, 600)); // returns true or fals
// function isLandscape(width, height) {
//   return width > height;
// }

// even or odd
// showNumbers(10);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = i % 2 === 0 ? "EVEN" : "ODD";
//     console.log(i + message);
//   }
// }

// string properties
// const movie = {
//   title: "abracadarbra",
//   releaseYear: 2015,
//   rating: 4.5,
//   director: "b",
// };
// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj)
//     if (typeof obj[key] === "string") console.log(key, obj[key]);
// }

// sum of multiple of 3 and 5
// console.log(sum(10));
// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
//   return sum;
// }

// calculate average grade
// const marks = [80, 85, 90];

// function calculateGradeMrks(marks) {
//   const average = calculateAverage(marks);

//   if (average < 60) return "F";
//   if (average < 70) return "D";
//   if (average < 80) return "C";
//   if (average < 90) return "B";
//   return "A";
// }

// //generic function
// function calculateAverage(array) {
//   let sum = 0;
//   for (let value of array) {
//     sum += value;
//     return sum / array.length;
//   }
// }

// exercise stars, nested loop
// showStars(5);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let patern = "";
//     for (let i = 0; i < row; i++) {
//       patern = "*";
//       console.log(patern);
//     }
//   }
// }
showPrimes(5);
// prime numbers
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor <= number; factor++)
    if (number % factor === 0) return false;
  return true;
}
