function add(a: number, b:number): number{
    return a+b;
}

let sum = function(a: number, y: number): number{
    return a+y;
};

console.log(add(5, 3)); // Logs 8
console.log(sum(5, 3)); // Logs 8