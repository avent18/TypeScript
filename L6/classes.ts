 

class Department { //if access modifier is not used ,its bydefault public
    name: string;
    private readonly id:string; //private not accessible outside class
   protected  employee:string[];//protected can be used inside the child classes
   


  //  constructor(name:string, employee:string[]){
                //another way to make it.  // shorthand
  //  }
      
    constructor(n:string ){
      this.name = n;
      this.id = "id";
      this.employee = [];
    }
    printName(this:Department):void{
      console.log("Department name: "+this.name);
    }

    addEmployee(emp:string){
      this.employee.push(emp);
    }
    printEmployee(){
      console.log(this.employee.length);
      console.log(this.employee);
    }
}

const department1 = new Department("IT");
console.log(department1);
department1.printName();

const departmentCopy = {
  name:"HR",
  printName: department1.printName,
};
departmentCopy.printName.call(department1);

department1.addEmployee("naveen");
console.log(department1);



//inheritance

class AccountingClass extends Department{
   constructor(id:string, private reports:string[],){  
       super("Accounting");//calls construcor of parent class
   }

   addReport(report: string) {
        this.reports.push(report);
    }

    printReports() {
        console.log(this.reports);
    }
    //overriding the parent function
    addEmployee(emp: string): void {
        if(emp === "Navee"){
          return;
        } else {
          this.employee.push(emp);
        }
    }

    //getter method
    get getReports(){
      if(this.reports.length>0){
        return this.reports;
      }
      throw new Error("Reports  not found");
    }

    set setReports(value:string){
      if(!value){
        throw new Error(" Please add some valid reports");
      }
      this.reports.push(value);
    }
}

const accDep = new AccountingClass("d2",["r1", "r2"]);
accDep.addEmployee("Ayush Upadhyay");
accDep.addReport("jkhsdhfljsdlkfjlkds");
accDep.printReports();
accDep.addEmployee("Navee")
accDep.addEmployee("Shivani");
console.log(accDep.getReports);
accDep.setReports = "apni to jasa tasa aapka kya hoga janabeAAli"
console.log(accDep);



//static methods

class Department1 { //if access modifier is not used ,its bydefault public
    name: string;
    private readonly id:string; //private not accessible outside class
   protected  employee:string[];//protected can be used inside the child classes
   


  //  constructor(name:string, employee:string[]){
                //another way to make it.  // shorthand
  //  }
      
    constructor(n:string ){
      this.name = n;
      this.id = "id";
      this.employee = [];
    }
    printName(this:Department):void{
      console.log("Department name: "+this.name);
    }

    addEmployee(emp:string){
      this.employee.push(emp);
    }
    printEmployee(){
      console.log(this.employee.length);
      console.log(this.employee);
    }

    static getSalary(){
      return {salary: 50000};
    }
}

const salary = Department1.getSalary()
console.log(salary)//for static methods no need to make object , they can be called without objext directly through class

//abstract classes
//abstract function has abstract classes
abstract class Department3{
  name:string;
  protected employees: string[]=[];
  protected readonly id: string;
  constructor(id:string, name:string ){
    this.name = name;
    this.id = id;

  }

  abstract describe(this:Department3):void;//abstract method must be implemented in child classes
  abstract displayName(this:Department3):void;
}

class ITDepartment extends Department3 {
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); // ✅ call parent constructor
  }
  
  //body of abstract function
  describe(): void {
    console.log("IT Department - ID: " + this.id);
  }

  displayName(this: Department3): void {
      console.log("IT Department - name: "+ this.name);
  }
}

const subDept = new ITDepartment("D1", []);
subDept.describe();

