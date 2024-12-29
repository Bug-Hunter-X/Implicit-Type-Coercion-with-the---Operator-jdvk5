# Javascript Implicit Type Coercion with the + Operator
This code demonstrates a common error in Javascript related to implicit type coercion using the + operator. When used with different data types, Javascript will automatically convert the operands to strings before concatenation. This can lead to unexpected results if numbers and arrays are added together.

## Bug
The provided Javascript function `foo` adds two arguments using the + operator. When one argument is a number and the other is an array or string, the + operator performs string concatenation instead of numerical addition. This behavior causes the output to differ from what is mathematically expected.

## Solution
The solution employs explicit type checking and conversion to ensure the operands are numbers before performing addition. This prevents implicit string conversion, resolving the unexpected behavior.