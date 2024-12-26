class Student
{
 RollNo: number;
 Name: string;
 constructor(_RollNo: number, _name: string)
 {
 this.RollNo = _RollNo;
 this.Name = _name;
 }
 showDetails()
 {
 console.log(this.RollNo + " : " + this.Name);

 }
}
let st:Student= new Student(19,"John");
st.showDetails();