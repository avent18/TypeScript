//Objects, arrays, tuples, enums, any  in ts


//Objects
const person:{
  firstName:string; //type annotation semicolon is used for 
  age:number;
  hobbies:string[];
  infor:{
    title:string;
    date:string;
  }[]
} = {
  firstName:"Max", //type inference, comma  is used for objects
  age:30,
  hobbies:["Sports", "Cooking"],
  infor:[
    {title:"Engineer", date:"2020"},
    {title:"Manager", date:"2021"}
  ]
}

console.log(person);

//object useing type alias
// type alias is used to create custom types
//usable if we want to use the same object structure multiple times
// type alias should be in pascal case

// type Person = {
//   firstName: string;
//   age: number;
//   hobbies: string[];
//   product: [number, string];
// };

// const person1: Person = {
//   firstName: "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   product: [1, "Book"]
// };




//Arrays

//will only contain string values
let favoriteActivities1:string[];
favoriteActivities1 = ["Sports", "Cooking", "Reading", "Traveling"];
console.log(favoriteActivities1);

//to keep multiple types in an array we use any type
let favoriteActivities2:any[];  //loosely typed array no use of type safety , ts wasted here, loose ts powerfull
favoriteActivities2 = ["Sports", "Cooking", "Reading", "Traveling", 1, 2, true];
console.log(favoriteActivities2);



//tuples
//fixed length array with fixed types
let role:[number, string]; //tuple type
role = [2, "author"];
console.log(role);

//example

const person1 :  {
  firstName: string;
  age: number;
  hobbies: string[];
  product: [number, string]; //tuple
} = {
  firstName: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  product: [1, "Book"]  //tuple value
}

console.log("The tuple is : ",person1);
console.log("The product id is : ",person1.product[0]);
console.log("The product name is : ",person1.product[1]);


//tuple useing type alias
// type alias is used to create custom types
//usable if we want to use the same object structure multiple times
// type alias should be in pascal case

// type Person = {
//   firstName: string;
//   age: number;
//   hobbies: string[];
//   product: [number, string];
// };

// const person1: Person = {
//   firstName: "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   product: [1, "Book"]
// };


//Enums
//used to define a set of named constants
//makes it easier to document intent or create a set of distinct cases
//can be numeric or string based
enum Role {ADMIN, READ_ONLY, AUTHOR}; //0,1,2
//enum values are by default 0,1,2,3....
//can also assign custom values
// enum Role {ADMIN=5, READ_ONLY, AUTHOR}; //5,6,7
// enum Role {ADMIN=5, READ_ONLY=10, AUTHOR=15}; //5,10,15
console.log(Role.READ_ONLY);    // 1
console.log(Role[0]); // ADMIN

const person3: {
  firstName: string;
  age: number;
  hobbies: string[];
  product: [number, string]; // tuple
  role: Role; //enum
} = {
  firstName: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  product: [1, "Book"],
  role: Role.ADMIN
};
console.log(person3);
if(person3.role === Role.ADMIN){
  console.log("is admin");//will execute this
}else if(person3.role === Role.READ_ONLY){
  console.log("is read only");//wont execute this
}else{
  console.log("is author");//will execute this
}