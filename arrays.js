// Adding elem to an [];
const numbers = [1, 2, 3, 1, 4, 5];
numbers.push(6, 7); //End
numbers.unshift(-1, 0); //Begining
numbers.splice(2, 0, "a", "b"); // Middle

// Finding elem in an [];
// Primitives
numbers.indexOf(5);
numbers.lastIndexOf(1);
numbers.includes(1); // if the number is in the [] ?

//Reference type (objects)
const courses = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
];

const course = courses.find((course) => course.name === "a");

numbers.pop(); //Removing last elem
numbers.shift(); //Removing the first elem
numbers.shift(2, 1); //Removing 1 elem, starting with 2 index;

// Emptying an []
let numbers2 = [1, 2, 3, 4, 5];
numbers2 = []; //Solution 1
numbers2.length = 0; // Solution 2
numbers2.splice(0, numbers2.length); //Solution 3
while (numbers2.length > 0) numbers2.pop(); //Solution 4

//Combining and slicing
const first = [1, 2, 3, 4, 5, 65, 67];
const second = ["a", "b", "v", "d"];
const combined = first.concat(second); // add 1 [] to 2 []
const sliced = combined.slice(2, 5); // slice [] from index 2 to index 5
const sliced2 = combined.slice(2); // slice [] after index 2
const sliced3 = combined.slice(); // create a copy of the []

//Spread operator = concat
const newCombined = [...first, ...second];
const copy = [...combined]; // copy with spread operator

//Iterating an []
for (let number of first) console.log(number); //for-of
first.forEach((number, index) => console.log(index, number)); //for-each

//Joining arrays
const joined = first.join(","); //Adding a string to [] and returning a string

const message = "This is my first message!";
const parts = message.split(" "); //Separate string using split method return [].
const combined2 = parts.join("-");

//Sorting arrays of numbers
const numbers3 = [3, 5, 7, 8, 2, 4, 1];
numbers3.sort();
numbers3.reverse();

//Sorting arrays of obj
const courses2 = [
  {
    id: 1,
    name: "Node.js",
  },
  {
    id: 2,
    name: "javaScript",
  },
];

courses2.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

//Testing the elem of an []
const allPositive = numbers3.every((value) => value > 0);
const atLeastOnePositive = numbers3.some((value) => value > 0);

//Filtering an []
let filtered = numbers3.filter((value) => value >= 0);

//Mapping the elem of an [] - numbers
let maped = filtered.map((n) => "<li>" + n + "</li>");
const html = "<ul>" + maped.join("") + "</ul>";

//Mapping the elem of an [] - obj
let items = filtered.map((n) => ({ value: n }));

//Short way to do filter and map together - chaining
const items2 = numbers3
  .filter((value) => value >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

//Reducing the elem of an []
let sum = 0;
for (let n of numbers3) sum += n; //calc the sum of all the numb in []

//second method to calc sum
const sum2 = numbers3.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
