// Function type in ts
function basic(a, b) {
    return a + b;
}
console.log(basic(10, 10));
// void: Void Indicates that function returns nothing
//   The function doesn’t return anything (but it finishes its job).
function Void() {
    console.log("nothing");
}
Void();
// Optional parameters in function
function OptionalParameters(a, b, c) {
    return a + b;
}
OptionalParameters(10, 20);
// never:
// function error()
// never ends
/* The function does not finish its work and come back to the place it was called from.


Keyword	What it Means	Example
void	Function does something but returns nothing	A greeting or console log function
never	Function never ends normally (error or loop)	Error throwing or infinite loop */
function NeverEnds() {
    throw new Error("Something went wrong");
}
NeverEnds();
function NeverEnding() {
    while (true) {
        console.log("It never Ends ");
    }
}
NeverEnding();
const personObj = {
    name: "bhanu",
    age: 24,
    isAttended: true,
};
console.log(personObj.age);
const twoSum = (a, b) => {
    return a + b;
};
console.log(twoSum(10, 20));
const User = {
    name: "bhanu",
    age: 24,
    isAttended: true,
};
let Multmessage = 6546545;
