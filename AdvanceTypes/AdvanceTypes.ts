// Function type in ts
function basic(a: number, b: number): number {
  return a + b;
}

console.log(basic(10, 10));

// void: Void Indicates that function returns nothing
function Void(): void {
  console.log("nothing");
}

Void();

// Optional parameters in function

function OptionalParameters(a: number, b: number, c?: number): number {
  return a + b;
}

OptionalParameters(10, 20);
