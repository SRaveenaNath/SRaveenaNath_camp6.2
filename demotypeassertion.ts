let empCode: any= 111;
let employeeCode = <number> empCode;
console.log(typeof(employeeCode));

interface Student{
    name: string;
    code:number;
}
let student = <Student> { };
student.name = "Raveena";
student.code = 123;

console.log("value" + student)