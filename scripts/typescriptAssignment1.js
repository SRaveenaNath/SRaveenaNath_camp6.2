"use strict";
// A. Converts a specified number to an array of digits
function numberToArray(num) {
    return num.toString().split('').map(Number);
}
// Example usage
console.log(numberToArray(12345)); // [1, 2, 3, 4, 5]
// B. Removes non-printable ASCII characters from a given string
function removeNonPrintableChars(str) {
    return str.replace(/[\x00-\x1F\x7F]/g, '');
}
// Example usage
console.log(removeNonPrintableChars("Hello\u0007World!")); // "HelloWorld!"
// C. Write a function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise
function allMatch(collection, predicate) {
    return collection.every(predicate);
}
// Example usage
console.log(allMatch([1, 2, 3], num => num > 0)); // true
console.log(allMatch([1, -2, 3], num => num > 0)); // false
// D. To capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// Example usage
console.log(capitalizeFirstLetter("hello")); // "Hello"
// E. To create an object with keys generated by running the provided function for each key and the same values as the provided object
function transformObjectKeys(obj, keyFunc) {
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[keyFunc(key)] = obj[key];
        }
    }
    return newObj;
}
// Example usage
console.log(transformObjectKeys({ name: 'Alice', age: 25 }, key => key.toUpperCase())); // { NAME: 'Alice', AGE: 25 }
// F. Create a function that invokes each provided function with the arguments it receives and returns the results
function invokeAll(...funcs) {
    return (...args) => funcs.map(fn => fn(...args));
}
// Example usage
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const results = invokeAll(sum, multiply)(2, 3);
console.log(results); // [5, 6]
// G. Create an object from the given key-value pairs
function createObjectFromPairs(pairs) {
    return Object.fromEntries(pairs);
}
// Example usage
console.log(createObjectFromPairs([['name', 'Alice'], ['age', 28]])); // { name: 'Alice', age: 28 }
// H. To join all given URL segments together, then normalize the resulting URL
function joinUrls(...segments) {
    return segments.join('/').replace(/\/+/g, '/');
}
// Example usage
console.log(joinUrls('https://example.com', 'path', 'to', 'resource')); // "https://example.com/path/to/resource"
// I. To compute the average of an array, after mapping each element to a value using the provided function
function average(arr, mapFunc) {
    const mapped = arr.map(mapFunc);
    const sum = mapped.reduce((acc, value) => acc + value, 0);
    return mapped.length ? sum / mapped.length : 0;
}
// Example usage
console.log(average([1, 2, 3, 4], x => x * 2)); // 5
// J. To add special characters to text to print in color in the console (combined with console.log())
function colorizeText(text, color) {
    const colorCodes = {
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        reset: '\x1b[0m'
    };
    const colorCode = colorCodes[color] || colorCodes.reset;
    return `${colorCode}${text}${colorCodes.reset}`;
}
// Example usage
console.log(colorizeText("Hello, World!", "blue"));
