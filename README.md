# Unexpected Type Coercion in JavaScript

This repository demonstrates a common JavaScript error: unexpected type coercion during arithmetic operations. The `foo` function aims to add two numbers, but it handles `null` values and fails to correctly handle string inputs. This highlights the importance of robust type checking in JavaScript. 

## Problem

The `bug.js` file contains the problematic code. The function doesn't explicitly check for string input, leading to a `TypeError` when a string is given.  The loose typing of JavaScript allows this to compile but results in a runtime error.

## Solution

The `bugSolution.js` file shows a corrected implementation. It includes type checks to ensure that the input is numeric or null before attempting addition, preventing the `TypeError` and providing clearer error handling.