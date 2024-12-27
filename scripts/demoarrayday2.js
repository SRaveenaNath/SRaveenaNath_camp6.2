"use strict";
//Array
let fruits = ['Orange', 2, 'Kiwi'];
console.log(fruits);
let arrValues = [23, 24, 25];
console.log(arrValues);
arrValues.push();
var employee = [101, 'Sanjay'];
console.log(employee);
employee[1] = employee[1].concat('Manager');
console.log(employee);
//Enum
//N is key of NEWS PAPER and so on
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["N"] = "NEWS PAPER";
    PrintMedia["L"] = "NEWS LETTER";
    PrintMedia["M"] = "MAGAZINE";
    PrintMedia["B"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
console.log(console.log(PrintMedia.B));
console.log(console.log(PrintMedia.N));
//any
let something = "Faith";
something = 100;
console.log(something);
