console.log("Let's learn functions in TypeScript!");

//function return type
// function add(a: number, b: number): number(return type) {
//   return a + b;
// }
function add(a: number, b: number): number {//will return 
  return a + b;
}



function greet(name: string): string {
  return `Hello, ${name}!`;
}

function logMessage(message: string): void {
  console.log(message);
}

// let greetWithFunction: Function;    bad practice 
let greetWithFunction: (a: string) => string; //good practice  now we can only assign functions that take a string and return a string
greetWithFunction = greet;//valid
// greetWithFunction = 5;//invalid
console.log(greetWithFunction("Alice"));//Hello, Alice!
// greetWithFunction = add;    will give error as add takes two numbers and returns a number
// console.log(greetWithFunction(3, 4));//7
greetWithFunction = function (name: string): string { ///valid
  return `Hi, ${name}!`;
}

let combineValues: (a: number, b: number) => number; //function type that takes two numbers and returns a number
combineValues = add;
console.log(combineValues(10, 20));//30

//function types with callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

//or can pass callback type as a type alias
type Callback = (num: number) => void;
function SubstractAndHandle(n1: number, n2: number, cb:Callback) {
  const result = n1 - n2;
  cb(result);
}
addAndHandle(10, 20, (result) => {
  console.log(result);//30
  // return result; //will give error as callback is of type void
});
SubstractAndHandle(20, 10, (result) => {
  console.log(result);//10
});