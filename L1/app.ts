function add(n1 : number, n2 : number, printResult:boolean, text:string){
   if(printResult){
    console.log(text , n1+n2);
   } else{
    return n1+n2;
   }
}

const n1 = 9;
const n2 = 2.8;
const text = "the sum of two numbers is ";


const printResult = true;

const result = add(n1, n2, printResult, text);
 

//the typescript has only three data types which are number, string, boolean
//array, object, tuple, enum, any, void, never, null, undefined
//type inference and union types
