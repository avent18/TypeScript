/** @format */
//UNION , LITERAL , ALIAS/CUSTOM TYPES
//UNION   | --> pipe symbol
function combine(n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
console.log("when numbers are provided , it adds: ", combine(30, 26));
console.log("when string are provided , it concatenate strings", combine("Max", "Anna"));
console.log("When numbers are provided as string , it concatenates", combine("30", "26"));
//LITERAL types  --> exact value made of union types
function combine1(n1, n2, resultConversion) {
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number") {
        return +n1 + +n2; // +n1 --> to convert string to number, it is same as parseFloat(n1)
    }
    else {
        return n1.toString() + n2.toString();
    }
}
console.log("when numbers are provided , it adds: ", combine1(30, 26, "as-number")); //56
console.log("when ones is string and other is number provided , it concatenate strings", combine1(29, "Anna", "as-text")); //29Anna
console.log("when ones is string and other is number provided , it concatenate strings", combine1(29, "Anna", "as-number")); //NaN--> because it tries to convert Anna to number
console.log("when string are provided , it concatenate strings", combine1("Max", "Anna", "as-text")); //MaxAnna
console.log("When numbers are provided as string , it concatenates", combine1("30", "26", "as-text")); //3026
function combine2(n1, n2, resultConversion) {
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number") {
        return +n1 + +n2; // +n1 --> to convert string to number, it is same as parseFloat(n1)
    }
    else {
        return n1.toString() + n2.toString();
    }
}
console.log("when numbers are provided , it adds: ", combine2(30, 26, "as-number")); //56
console.log("when ones is string and other is number provided , it concatenate strings", combine2(29, "Anna", "as-text")); //29Anna
console.log("when ones is string and other is number provided , it concatenate strings", combine2(29, "Anna", "as-number")); //NaN--> because it tries to convert Anna to number
console.log("when string are provided , it concatenate strings", combine2("Max", "Anna", "as-text")); //MaxAnna
console.log("When numbers are provided as string , it concatenates", combine2("30", "26", "as-text")); //3026
var u1 = {
    name: "Max",
    age: 30
};
var u2 = {
    name: "Anna",
    age: 25
};
console.log(u1);
console.log(u2);
;
var interfaceUser = {
    name: "MaxInterface",
    age: 30
};
console.log(interfaceUser);
var add;
add = function (n1, n2) {
    return n1 + n2;
};
function greet(user) {
    console.log("Hi, ", user.name);
}
greet(u1);
greet(u2);
greet(interfaceUser);
