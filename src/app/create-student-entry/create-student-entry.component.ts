import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student-entry',
  templateUrl: './create-student-entry.component.html',
  styleUrls: ['./create-student-entry.component.css']
})
export class CreateStudentEntryComponent implements OnInit {
   studentForm:FormGroup
  constructor(private studentService:StudentService,private router:Router) {
    this.studentForm = new FormGroup({
      'studentName': new FormControl('', Validators.required),
      'studentEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'class': new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void { }

  submitStudent(){
    Object.keys(this.studentForm.controls).forEach(field => {
      const control = this.studentForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.studentForm.valid){
      console.log(this.studentForm.value);
      this.studentService.saveStudent(this.studentForm.value).subscribe(() => {
        this.router.navigate(['/all-enrolled-students'])
      },() => {
        alert("Something Went Wrong!")
      })
      
    }
  }

}
