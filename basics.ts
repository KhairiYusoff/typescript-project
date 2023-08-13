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

let person: {
  name: string;
  age: number;
};

person = {
  name: "kahi",
  age: 23,
};

let people: {
  name: string;
  age: number;
}[];

let aku: string = "sss";
console.log(aku);

//Type inference

let course: number | string = "react - the complete guide";

course = 123;
