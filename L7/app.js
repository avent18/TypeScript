console.log("i am the king");
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(20, 30));
console.log(add("20", 30));
const emp1 = {
    name: "Naveen",
    privilages: ["bjhk"],
    startDate: new Date(),
};
function printUnknownEmployee(emp) {
    console.log("Name : ", +emp.name);
    // console.log("Privilages: ",+ emp.privilages);   this will give error as it do  not know from where prrivilages coming(admin or employee)
    //so use typeGaurd
    // if(typeof emp === "object"){ //wrong code as object can be empty u never know
    //   console.log(emp.privilages)
    // }
    //so use  in keyword buiild in js 
    if ('privilages' in emp1) {
        console.log(emp1.privilages);
    }
}
class Employee5 {
    name;
    startDate;
    constructor(name, startDate) {
        this.name = name;
        this.startDate = startDate;
    }
}
class Admin1 {
    name;
    privilages;
    constructor(name, privilages) {
        this.name = name;
        this.privilages = privilages;
    }
}
function printEmployeeInfo(emp) {
    console.log("Name:", emp.name);
    // type guard with instanceof
    if (emp instanceof Admin1) {
        console.log("Privilages:", emp.privilages);
    }
    if (emp instanceof Employee5) {
        console.log("Start Date:", emp.startDate.toDateString());
    }
}
const e1 = new Employee5("Naveen", new Date());
const a1 = new Admin1("Ayush", ["create-server", "delete-db"]);
printEmployeeInfo(e1);
printEmployeeInfo(a1);
//type casting or type assertion
//<HTMLInputElement>
const userInput = document.getElementById("user-input");
//or
// const userInput = <HTMLInputElement>document.getElementById("user-input")! as HTMLInputElement;
userInput.value = " HEllo";
export {};
