//Objects, arrays, tuples, enums in ts
//Objects
var person = {
    firstName: "Max", //type inference, comma  is used for objects
    age: 30,
    hobbies: ["Sports", "Cooking"],
    infor: [
        { title: "Engineer", date: "2020" },
        { title: "Manager", date: "2021" }
    ]
};
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
var favoriteActivities1;
favoriteActivities1 = ["Sports", "Cooking", "Reading", "Traveling"];
console.log(favoriteActivities1);
//to keep multiple types in an array we use any type
var favoriteActivities2; //loosely typed array no use of type safety , ts wasted here, loose ts powerfull
favoriteActivities2 = ["Sports", "Cooking", "Reading", "Traveling", 1, 2, true];
console.log(favoriteActivities2);
//tuples
//fixed length array with fixed types
var role; //tuple type
role = [2, "author"];
console.log(role);
//example
var person1 = {
    firstName: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    product: [1, "Book"] //tuple value
};
console.log("The tuple is : ", person1);
console.log("The product id is : ", person1.product[0]);
console.log("The product name is : ", person1.product[1]);
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; //0,1,2
//enum values are by default 0,1,2,3....
//can also assign custom values
// enum Role {ADMIN=5, READ_ONLY, AUTHOR}; //5,6,7
// enum Role {ADMIN=5, READ_ONLY=10, AUTHOR=15}; //5,10,15
console.log(Role.READ_ONLY); // 1
console.log(Role[0]);
var person3 = {
    firstName: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    product: [1, "Book"],
    role: Role.ADMIN
};
console.log(person3);
if (person3.role === Role.ADMIN) {
    console.log("is admin");
}
else if (person3.role === Role.READ_ONLY) {
    console.log("is read only");
}
else {
    console.log("is author");
}
