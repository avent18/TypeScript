var userInput; // as we don't know what type of value we will get ex- password from user
//diff bewt unknown and any is that we can perform any operation on any type but we can't perform any operation on unknown type without checking its type first
var userName;
// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string' butif we use any type it will not give any error
//resolve this error we can use type assertion or type narrowing
if (typeof userInput === "string") {
    userName = userInput; // Now it will not give any error as we have checked the type of userInput
}
//never return type
function generateError(message, code) {
    throw { message: message, errorCode: code }; // it will never return anything as it will always throw an error
}
generateError("An error occurred!", 500); // it will never return anything as it will always throw an error
