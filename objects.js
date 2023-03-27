//Object-oriented Programing OOP
// where a program is a colection of objects talking to each other
// in OOP if a function is part of an obj - we call this a method

// let circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 2,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("draw");
//   },
// };

// let user = new Object (); - object constructor syntax
// let user = {};  - object literal syntax

// circle.draw(); // method

//Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle1 = createCircle(2);
// console.log(circle1);

// circle1.isAdmin = true;
// delete circle1.draw;

// circle1["likes birds"] = true;
// delete circle1["isAdmin"];

// let key = "something new";
// circle1[key] = true;

//Constructor functon
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// Circle.call({}, argument1);
// Circle.apply({}, [argument1, argument2, argument3]);

// //object constructor syntax
// const circle = new Circle(3);

// new String(); '', "", ``
// new Boolean(); true, false
// new Number(); 1, 2, 3, ...

// cloning an object
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// const another = {};
// for (let key in circle) another[key] = circle[key];

// another["radius"] = circle["radius"];
// console.log(another);

// const another = Object.assign(
//   {
//     color: "yellow",
//   },
//   circle
// );

// const another = { ...circle };
// console.log(another);

//Garbage collector - js is cleaning memory by hemself

// //string primitive
// const message = "This is my \n first message!";

// //String object
// const another = new String("hi");

// //Objet literals
// //Boolean literals
// // String ''
// //Template literals
// const myName = "Vera";
// const another2 = `This is my - new
// template literals! ${myName} ${2 + 3}`;
// console.log(another2);

// const now = new Date();
// const date1 = new Date("May 15 2015 09:00");
// const date2 = new Date(2018, 4, 11, 9);
// now.getDate();

//1. Create an adress obj. with 3 properties street,

// let address = {
//   street: "Mihail Andreev",
//   city: "Sofia",
//   zipCode: 1407,
// };

// function showAddress(obj) {
//   for (let key in obj) console.log(key, obj[key]);
// }

// showAddress(address);

//2. write 1 factory function and 1 constructor function to initialize an obj.

//Factory function
function createObject(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let myAddress = createObject("Mihail Andreev", "Sofia", 1407);
console.log(myAddress);

function Address(address, city, zipCode) {
  this.address = address;
  this.city = city;
  this.zipCode = this.zipCode;
}

let address1 = new Address("Mihail Andreev", "Sofia", 1407);
let address2 = new Address("Mihail Andreev", "Sofia", 1407);

function areEqual(a, b) {
  return (
    address1.address === address2.address &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSame(a, b) {
  return address1 === address2;
}

let eguality = areEqual(address1, address2);
let same = areSame(address1, address2);
console.log("Eguality " + eguality);
console.log("Same " + same);

let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ],
  isLive: true,
};

console.log(post);

function Post(title, body, author) {
  (this.title = title),
    (this.body = body),
    (this.author = author),
    (this.views = 0),
    (this.comments = []),
    (this.isLive = false);
}

let newPost = new Post("a", "b", "c");
console.log(newPost);

let priceRanges = [
  {
    label: "$",
    tooltip: "Inexpensive",
    minPewrPerson: 0,
    maxPerPerson: 10,
  },
  {
    label: "$4",
    tooltip: "Moderate",
    minPewrPerson: 11,
    maxPerPerson: 20,
  },
  {
    label: "$$$",
    tooltip: "Expensive",
    minPewrPerson: 21,
    maxPerPerson: 50,
  },
];

let restaurants = [{ averagePerPerson: 5 }];
