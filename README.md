# TypeScript Type Error: Argument of type 'string' is not assignable to parameter of type 'number'

This repository demonstrates a common TypeScript error related to type mismatches between function parameters and arguments. The example highlights how TypeScript's type system helps catch these errors during development.

## The Bug

The `bug.ts` file contains a function `add` which expects two numeric arguments. However, the code attempts to call the function with a string and a number, leading to a type error.

## The Solution

The `bugSolution.ts` file shows how to correct this error by ensuring that the arguments passed to the `add` function are of the correct type. This could involve type checking, conversion, or a more robust approach to handling input.