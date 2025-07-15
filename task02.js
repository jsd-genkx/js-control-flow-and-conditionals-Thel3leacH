"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = 42;
// Try changing to "hello", 10, null, NaN
console.log(typeof NaN);

if (typeof userInput === "number" && !isNaN(userInput)) {
    console.log("It's a number");
} else {
    console.log("It's NOT a number");
}