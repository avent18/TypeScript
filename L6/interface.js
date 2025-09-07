console.log("These are interfaces");
const u = {
    name: "Naveen",
    age: 22,
    greet(msg) {
        console.log(this.name + " says " + msg);
    }
};
console.log(u);
u.greet("whats news");
const we = {
    name: "Ayush",
    age: 23,
    greet(msg) {
        console.log(this.name + " says " + msg);
    }
};
console.log(we);
we.greet("whats good news");
//using interface in class
class Bsdk {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(msg) {
        console.log(`${this.name} (age ${this.age}) says: ${msg}`);
    }
}
const b1 = new Bsdk("Shivam", 25);
console.log(b1);
b1.greet("Hello from class!");
const b2 = new Bsdk("Rahul", 28);
console.log(b2);
b2.greet("Interface Person contract follow kiya!");
// Class implementing the extended interface
class Developer {
    constructor(name, age, id, dept) {
        this.name = name;
        this.age = age;
        this.employeeId = id;
        this.department = dept;
    }
    greet(msg) {
        console.log(`${this.name} (${this.department}, ID: ${this.employeeId}) says: ${msg}`);
    }
}
// ✅ Usage
const dev1 = new Developer("Naveen", 22, 101, "IT");
dev1.greet("I love TypeScript!");
const dev2 = new Developer("Ayush", 23, 102, "Finance");
dev2.greet("I can still be seen as just a Person");
export {};
