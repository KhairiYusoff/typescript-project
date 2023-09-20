// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;

age = 30;

let userName: string | string[] = "Khai";

userName = "Khairi";

let instructor: boolean;

instructor = true;

// Number
let numberOfStudents: number;
numberOfStudents = 50;

// String
let courseName: string;
courseName = "JavaScript Fundamentals";

// Boolean
let isCompleted: boolean;
isCompleted = false;

// Objects
let person2: { name: string; age: number };
person2 = { name: "Alice", age: 28 };

// Tuples (fixed-length arrays)
let coordinates: [number, number];
coordinates = [10, 20];

let mixedValues: [number, string, boolean];
mixedValues = [100, "power", true];

let measurement: [string, number, boolean, string];
measurement = ["Temperature", 25, false, "Celsius"];

let team: [string, number, ...string[]];
team = ["Player 1", 10];
team = ["Player 2", 20, "Player 3", "Player 4"]; // Valid

let team2: [string, number, string[]];
team2 = ["Player 1", 10, ["Player 2", "Player 3"]];
console.log(team2);

//more complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let myNumber: number[];
myNumber = [1, 2, 3, 4, 5];

//Type Aliases
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "kahi",
  age: 23,
};

let people: Person[];

//Type inference

let course: number | string = "react - the complete guide";

course = 123457;

console.log(course);

//functions

function add2(a: number, b: number) {
  return a + b;
}

const result2 = add2(2, 5);

console.log(result2);

function print(value: any) {
  console.log(value);
}
