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

console.log(joined);
