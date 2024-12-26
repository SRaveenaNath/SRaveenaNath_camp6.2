let isDone: boolean = false;
let unusable: void = undefined;

function ProcessData(x: any, y: any) {
    return x + y;
}

let result: any;
result = ProcessData("Hello", "Any!");
console.log(result); // Logs "HelloAny!"

result = ProcessData(2, 3);
console.log(result); // Logs 5
