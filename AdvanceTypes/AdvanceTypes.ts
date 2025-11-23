// Function type in ts
function basic(a: number, b: number): number {
  return a + b;
}

console.log(basic(10, 10));

// void: Void Indicates that function returns nothing
//   The function doesn’t return anything (but it finishes its job).
function Void(): void {
  console.log("nothing");
}

Void();

// Optional parameters in function
function OptionalParameters(a: number, b: number, c?: number): number {
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

function NeverEnds(): never {
  throw new Error("Something went wrong");
}

NeverEnds();

function NeverEnding() {
  while (true) {
    console.log("It never Ends ");
  }
}

NeverEnding();

// Interfaces

//  object Interface

interface obj {
  name: string;
  age: number;
  isAttended: boolean;
}

const personObj: obj = {
  name: "bhanu",
  age: 24,
  isAttended: true,
};

console.log(personObj.age);

// Interfaces for functions

interface addFunction {
  (a: number, b: number): number;
}

const twoSum: addFunction = (a: number, b: number) => {
  return a + b;
};

console.log(twoSum(10, 20));

// Custom Types

type user = {
  name: string;
  age: number;
  isAttended: boolean;
};

const User: user = {
  name: "bhanu",
  age: 24,
  isAttended: true,
};

type mult = string | number | boolean;

let Multmessage: mult = 6546545;

// unkown vs any

// unknown
let username: unknown = "Bhanu";

let anotherUserName: string = username as string;

// any
let usernumber: any = 20;

let anotherUsernumber: string = usernumber;
