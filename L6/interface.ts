console.log("These are interfaces")

// TypeScript me interface ka main kaam hota hai:

// 👉 Kisi object ka shape (structure) define karna — matlab uske andar kaunse properties honge, unke types kya honge, optional/must kaise honge.//
//compile hone pr js m nhi banega kebal typescript m hi banega balki class js file m bhhi banegi
// interface batata h functions, properties ka type ky hoga, class m vahi properties implement and initialize bhi kr sakte hh
//interface k pass object banane ki power  nhi hoti 
//extends use karke ek ya multiple interface extend kar sakte ho , class m ek hi kr skte hh
//Classes ko enforce karne ke liye use hota hai (class X implements Y)
//implements keyword use karke ek class ko kisi interface ka contract follow karna padta hai

interface User {
  name: string;
  age: number;
  greet(msg: string): void;
}
interface Person {
  name: string;
  age: number;
  greet(msg: string): void;
}

const u: User = {
  name: "Naveen",
  age: 22,
  greet(msg):void {
    console.log(this.name + " says " + msg);
  }
};
console.log(u)
u.greet("whats news");

const we: User = {
  name: "Ayush",
  age: 23,
  greet(msg):void {
    console.log(this.name + " says " + msg);
  }
};
console.log(we)
we.greet("whats good news");

//using interface in class
class Bsdk implements User, Person{
   name:string;
   age:number;
   constructor(name:string, age:number){
    this.name = name;
    this.age = age;
   }

     greet(msg: string): void {
    console.log(`${this.name} (age ${this.age}) says: ${msg}`);
  }
}
const b1 = new Bsdk("Shivam", 25);
console.log(b1);
b1.greet("Hello from class!") ;

const b2: Person = new Bsdk("Rahul", 28);
console.log(b2);
b2.greet("Interface Person contract follow kiya!");


//Extending interfaces
// extending interfaces is just like inheritance for types, but without any runtime code.
// It allows one interface to reuse + extend another’s properties/methods.

// Base interface
interface Person3 {
  name: string;
  age: number;
  greet(msg: string): void;
}

// Extended interface
interface Employee extends Person3 {
  employeeId: number;
  department: string;
}

// Class implementing the extended interface
class Developer implements Employee {
  name: string;
  age: number;
  employeeId: number;
  department: string;

  constructor(name: string, age: number, id: number, dept: string) {
    this.name = name;
    this.age = age;
    this.employeeId = id;
    this.department = dept;
  }

  greet(msg: string): void {
    console.log(
      `${this.name} (${this.department}, ID: ${this.employeeId}) says: ${msg}`
    );
  }
}

// ✅ Usage
const dev1: Employee = new Developer("Naveen", 22, 101, "IT");
dev1.greet("I love TypeScript!");

const dev2: Person = new Developer("Ayush", 23, 102, "Finance");
dev2.greet("I can still be seen as just a Person");
