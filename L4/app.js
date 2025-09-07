console.log("Let's learn functions in TypeScript!");
//function return type
// function add(a: number, b: number): number(return type) {
//   return a + b;
// }
function add(a, b) {
    return a + b;
}
function greet(name) {
    return "Hello, ".concat(name, "!");
}
function logMessage(message) {
    console.log(message);
}
// let greetWithFunction: Function;    bad practice 
var greetWithFunction; //good practice  now we can only assign functions that take a string and return a string
greetWithFunction = greet; //valid
// greetWithFunction = 5;//invalid
console.log(greetWithFunction("Alice")); //Hello, Alice!
// greetWithFunction = add;    will give error as add takes two numbers and returns a number
// console.log(greetWithFunction(3, 4));//7
greetWithFunction = function (name) {
    return "Hi, ".concat(name, "!");
};
var combineValues; //function type that takes two numbers and returns a number
combineValues = add;
console.log(combineValues(10, 20)); //30
//function types with callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
function SubstractAndHandle(n1, n2, cb) {
    var result = n1 - n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result); //30
    // return result; //will give error as callback is of type void
});
SubstractAndHandle(20, 10, function (result) {
    console.log(result); //10
});
