function add(a: number, b: number): number {
  return a + b;
}

let result = add(Number("1"), 2); //Correct: String converted to number before passing
console.log(result); //Output 3

function addString(a: string, b: string): string {
  return a + b; // Correct: string concatenation
}

let stringResult = addString("1", "2");
console.log(stringResult) // Output 12