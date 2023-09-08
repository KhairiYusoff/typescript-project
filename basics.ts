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

course = 123;
