class Department {
    //  constructor(name:string, employee:string[]){
    //another way to make it.  // shorthand
    //  }
    constructor(n) {
        this.name = n;
        this.id = "id";
        this.employee = [];
    }
    printName() {
        console.log("Department name: " + this.name);
    }
    addEmployee(emp) {
        this.employee.push(emp);
    }
    printEmployee() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
const department1 = new Department("IT");
console.log(department1);
department1.printName();
const departmentCopy = {
    name: "HR",
    printName: department1.printName,
};
departmentCopy.printName.call(department1);
department1.addEmployee("naveen");
console.log(department1);
//inheritance
class AccountingClass extends Department {
    constructor(id, reports) {
        super("Accounting"); //calls construcor of parent class
        this.reports = reports;
    }
    addReport(report) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
    //overriding the parent function
    addEmployee(emp) {
        if (emp === "Navee") {
            return;
        }
        else {
            this.employee.push(emp);
        }
    }
    //getter method
    get getReports() {
        if (this.reports.length > 0) {
            return this.reports;
        }
        throw new Error("Reports  not found");
    }
    set setReports(value) {
        if (!value) {
            throw new Error(" Please add some valid reports");
        }
        this.reports.push(value);
    }
}
const accDep = new AccountingClass("d2", ["r1", "r2"]);
accDep.addEmployee("Ayush Upadhyay");
accDep.addReport("jkhsdhfljsdlkfjlkds");
accDep.printReports();
accDep.addEmployee("Navee");
accDep.addEmployee("Shivani");
console.log(accDep.getReports);
accDep.setReports = "apni to jasa tasa aapka kya hoga janabeAAli";
console.log(accDep);
//static methods
class Department1 {
    //  constructor(name:string, employee:string[]){
    //another way to make it.  // shorthand
    //  }
    constructor(n) {
        this.name = n;
        this.id = "id";
        this.employee = [];
    }
    printName() {
        console.log("Department name: " + this.name);
    }
    addEmployee(emp) {
        this.employee.push(emp);
    }
    printEmployee() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
    static getSalary() {
        return { salary: 50000 };
    }
}
const salary = Department1.getSalary();
console.log(salary); //for static methods no need to make object , they can be called without objext directly through class
//abstract classes
//abstract function has abstract classes
class Department3 {
    constructor(id, name) {
        this.employees = [];
        this.name = name;
        this.id = id;
    }
}
class ITDepartment extends Department3 {
    constructor(id, admins) {
        super(id, "IT"); // ✅ call parent constructor
        this.admins = admins;
    }
    //body of abstract function
    describe() {
        console.log("IT Department - ID: " + this.id);
    }
    displayName() {
        console.log("IT Department - name: " + this.name);
    }
}
const subDept = new ITDepartment("D1", []);
subDept.describe();
export {};
