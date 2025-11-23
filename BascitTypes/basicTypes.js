// String type
const Name = "Bhanuprakash";
// String Array type
const NameString = ["bhanuprakash", "Jitendar"];
// number type
const value = 10;
// number array type(inner Array's)
const valueNumber = [
    [10, 20],
    [14, 25],
];
// boolean type
const isAttended = true;
// number array type(single Array)
const singleNumber = [10, 20];
// creating object with declared type obj
const person = {
    name: "helo",
    age: 22,
    isAttended: false,
};
// any type - not recommended
let anyType = "hello";
anyType = 10;
// Tuple -  FIXED TYPE AND LENGTH FOR ARRAYS
const tuple = [10, "hello"];
const multTuple = [
    [10, "hello"],
    [25, "hi"],
];
const singleTuple = ["hello"];
// UNION - allows us to give more than one type for a single variable
let MultipleTypes;
MultipleTypes = 10;
MultipleTypes = "HelloUnion";
//  enum
/*
An enum (short for "enumeration") is a special type in TypeScript that allows you to store a collection of related values which are constants only(like a list of options) under a single name.

Why use an enum?
It makes your code more readable.

It helps avoid using plain strings or numbers everywhere.

It prevents errors from using incorrect values.

. We can also use for constants
 */
var allNumberTypes;
(function (allNumberTypes) {
    allNumberTypes[allNumberTypes["lowScore"] = 100] = "lowScore";
    allNumberTypes[allNumberTypes["averageScore"] = 250] = "averageScore";
    allNumberTypes[allNumberTypes["HighestScore"] = 370] = "HighestScore";
})(allNumberTypes || (allNumberTypes = {}));
console.log(allNumberTypes.lowScore);
// Type Asserstions:
let MyNumber = 10;
let changeToString = MyNumber.toString();
