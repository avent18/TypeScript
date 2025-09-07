function add(n1, n2, printResult, text) {
    if (printResult) {
        console.log(text, n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var n1 = 9;
var n2 = 2.8;
var text = "the sum of two numbers is ";
var printResult = true;
var result = add(n1, n2, printResult, text);
//the typescript has only three data types which are number, string, boolean
//array, object, tuple, enum, any, void, never, null, undefined
//type inference and union types
