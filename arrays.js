const numbers = [3, 4];

//End
numbers.push(5, 6);

//Begining
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0, "a", "b");

console.log(numbers);

// Find reference types in an array
console.log(numbers.indexOf("a"));
