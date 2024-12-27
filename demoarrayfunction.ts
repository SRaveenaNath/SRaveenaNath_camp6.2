//Array function
class Employee{
    empCode: number;
    empName: string;

    //Constructor

    constructor(code: number, name: string){
        this.empCode=code;
        this.empName=name;
    }

    //concrete functions-regular methods for implementation
    // displayInfo(){
    //     console.log("I am Concrete method")
    // }


    displayInfo=()=>
        console.log("I am Concrete method")
}
//instance
// Employee objEmp =new Employee(1001, "Sanjay");--> for c#
let emp = new Employee(1001, "Sanjay");
emp.displayInfo();