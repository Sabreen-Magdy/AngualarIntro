import { Component } from '@angular/core';
interface Student {
  name: string;
  age: number;
  address: string;
  phoneNumber: string;
}
@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {
  student: Student = {
    name: '',
    age: 10,
    address: 'Cairo',
    phoneNumber: ''
    };
    registeredStudents: Student[] = [];
    sendValues(e:Event){
      e.preventDefault();
      if(this.nameValidation && this.ageValidation && this.phoneValidation){
        this.registeredStudents.push({ ...this.student });
        this.student.name = '';
        this.student.age = 10;
        this.student.address = 'Cairo';
        this.student.phoneNumber = '';
      }
    }
    get nameValidation(){
        return this.student.name.length>=5;
    }
    get ageValidation(){
        return this.student.age>=10 && this.student.age<=17;
    }
    get phoneValidation(){
      const phoneRegex = /^(011|010|012)\d{8}$/;
      return phoneRegex.test(this.student.phoneNumber);
    }
    Remove(i: number) {
      this.registeredStudents.splice(i, 1);
  }

}
