/** @format */

//UNION , LITERAL , ALIAS/CUSTOM TYPES

//UNION   | --> pipe symbol

function combine(n1: number | string, n2: number | string) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  } else {
    return n1.toString() + n2.toString();
  }
}

console.log("when numbers are provided , it adds: ", combine(30, 26));
console.log(
  "when string are provided , it concatenate strings",
  combine("Max", "Anna")
);
console.log(
  "When numbers are provided as string , it concatenates",
  combine("30", "26")
);

//LITERAL types  --> exact value made of union types
function combine1(
  n1: number | string,
  n2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    return +n1 + +n2; // +n1 --> to convert string to number, it is same as parseFloat(n1)
  } else {
    return n1.toString() + n2.toString();
  }
}

console.log(
  "when numbers are provided , it adds: ",
  combine1(30, 26, "as-number")
); //56
console.log(
  "when ones is string and other is number provided , it concatenate strings",
  combine1(29, "Anna", "as-text")
); //29Anna
console.log(
  "when ones is string and other is number provided , it concatenate strings",
  combine1(29, "Anna", "as-number")
); //NaN--> because it tries to convert Anna to number
console.log(
  "when string are provided , it concatenate strings",
  combine1("Max", "Anna", "as-text")
); //MaxAnna
console.log(
  "When numbers are provided as string , it concatenates",
  combine1("30", "26", "as-text")
); //3026

//ALIAS/CUSTOM TYPES --interfaces are also similar to this(but interfaces are more powerful) will learn later in this series
type Combinable = number | string | boolean | object | string[]; // ans so many types we can add
type ConversionDescriptor = "as-number" | "as-text"; //use capital letter for custom types

function combine2(
  n1: Combinable,
  n2: Combinable,
  resultConversion: ConversionDescriptor
) {
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    return +n1 + +n2; // +n1 --> to convert string to number, it is same as parseFloat(n1)
  } else {
    return n1.toString() + n2.toString();
  }
}

console.log(
  "when numbers are provided , it adds: ",
  combine2(30, 26, "as-number")
); //56
console.log(
  "when ones is string and other is number provided , it concatenate strings",
  combine2(29, "Anna", "as-text")
); //29Anna
console.log(
  "when ones is string and other is number provided , it concatenate strings",
  combine2(29, "Anna", "as-number")
); //NaN--> because it tries to convert Anna to number
console.log(
  "when string are provided , it concatenate strings",
  combine2("Max", "Anna", "as-text")
); //MaxAnna
console.log(
  "When numbers are provided as string , it concatenates",
  combine2("30", "26", "as-text")
); //3026

//alias example with object

type User = {
   name: string; 
   age: number 
  };

const u1: User = {
   name: "Max", 
   age: 30 
  };
const u2: User = {
   name: "Anna", 
   age: 25
   };

console.log(u1);
console.log(u2);

//interfaces
interface Person6 { 
   name: string; 
   age: number 
  };

const interfaceUser: Person6 = {
   name: "MaxInterface", 
   age: 30 
  };
  console.log(interfaceUser);

  //example with function
  type AddFn = (a: number, b: number) => number;
  let add: AddFn;
  add = (n1: number, n2: number) => {
    return n1 + n2;
  };


  function greet(user: User) {
    console.log("Hi, ",user.name);
  }
  greet(u1);
  greet(u2);
  greet(interfaceUser);
