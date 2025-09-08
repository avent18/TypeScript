console.log("generics class");



type person = {
  name:string,
  address:string,
}

const person = {
  name:"naveen",
  address:"spn",
}

const persons:Array<person>=[{name:"NA", address:"spn"}];
console.log("All persons array:", persons);



function merge<T, U>(objA:T, objB:U){
  return {...objA, ...objB}
}

const mergedObj = merge( {
  name:"naveen",
  address:"spn",
},{ name: "Rohit", address: "mumbai" }
)

console.log("The merged product is :",mergedObj);


//generic constraints
//1. Only allow objects as inputs✅
// function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
//   return { ...objA, ...objB };
// }

// const merged = merge({ name: "Naveen" }, { age: 22 });
// console.log(merged.name, merged.age); // ✅ works fine

// ❌ merge(10, 20); // Error: number not assignable to object


//2.key Constraints✅
// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return "Value: " + obj[key];
// }

// console.log(extractAndConvert({ name: "Naveen", age: 22 }, "name"));
// Output: Value: Naveen

// ❌ console.log(extractAndConvert({ name: "Naveen" }, "address"));
// Error: address does not exist on type


//3. Only allow objects that have a length property
// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let description = "Got no value.";
//   if (element.length === 1) {
//     description = "Got 1 element.";
//   } else if (element.length > 1) {
//     description = "Got " + element.length + " elements.";
//   }
//   return [element, description];
// }

// console.log(countAndDescribe("Hello")); 
// // ["Hello", "Got 5 elements."]

// console.log(countAndDescribe([1, 2, 3])); 
// [[1,2,3], "Got 3 elements."]


