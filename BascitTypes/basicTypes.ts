// String type
const Name: string = "Bhanuprakash";

// String Array type
const NameString: string[] = ["bhanuprakash", "Jitendar"];

// number type
const value: number = 10;

// number array type(inner Array's)
const valueNumber: number[][] = [
  [10, 20],
  [14, 25],
];

// boolean type
const isAttended: boolean = true;

// number array type(single Array)
const singleNumber: number[] = [10, 20];

// obj type (declaring types first )
type pobj = {
  name: string;
  age: number;
  isAttended: boolean;
};

// creating object with declared type obj
const person: pobj = {
  name: "helo",
  age: 22,
  isAttended: false,
};

// any type - not recommended

let anyType: any = "hello";
anyType = 10;

// Tuple -  FIXED TYPE AND LENGTH FOR ARRAYS
const tuple: [number, string] = [10, "hello"];

const multTuple: [number, string][] = [
  [10, "hello"],
  [25, "hi"],
];

const singleTuple: [string] = ["hello"];

// UNION - allows us to give more than one type for a single variable

let MultipleTypes: number | string;

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

enum allNumberTypes {
  lowScore = 100,
  averageScore = 250,
  HighestScore = 370,
}

console.log(allNumberTypes.lowScore);

// Type Asserstions:

let MyNumber: number = 10;

let changeToString: string = MyNumber.toString();
