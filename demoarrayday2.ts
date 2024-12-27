//Array
let fruits: (string|number)[] = ['Orange',2,'Kiwi']
console.log(fruits)

let arrValues: Array<number> =[23,24,25];
console.log(arrValues)

arrValues.push()

var employee:[number,string] =[101,'Sanjay'];
console.log(employee)

employee[1]=employee[1].concat('Manager');
console.log(employee)

//Enum
//N is key of NEWS PAPER and so on
enum PrintMedia{
    N="NEWS PAPER",
    L="NEWS LETTER",
    M="MAGAZINE",
    B="BOOK"
}

console.log(console.log(PrintMedia.B))
console.log(console.log(PrintMedia.N))

//any
let something : any="Faith";
something=100;
console.log(something)


