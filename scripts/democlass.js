"use strict";
class Student {
    constructor(_RollNo, _name) {
        this.RollNo = _RollNo;
        this.Name = _name;
    }
    showDetails() {
        console.log(this.RollNo + " : " + this.Name);
    }
}
let st = new Student(19, "John");
st.showDetails();
