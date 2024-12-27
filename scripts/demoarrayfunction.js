"use strict";
//Array function
class Employee {
    //Constructor
    constructor(code, name) {
        //concrete functions-regular methods for implementation
        // displayInfo(){
        //     console.log("I am Concrete method")
        // }
        this.displayInfo = () => console.log("I am Concrete method");
        this.empCode = code;
        this.empName = name;
    }
}
//instance
// Employee objEmp =new Employee(1001, "Sanjay");--> for c#
let emp = new Employee(1001, "Sanjay");
emp.displayInfo();
