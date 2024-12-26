"use strict";
let isDone = false;
let unusable = undefined;
function ProcessData(x, y) {
    return x + y;
}
let result;
result = ProcessData("Hello", "Any!");
console.log(result); // Logs "HelloAny!"
result = ProcessData(2, 3);
console.log(result); // Logs 5
