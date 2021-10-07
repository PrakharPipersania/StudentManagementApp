import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student-info',
  templateUrl: './edit-student-info.component.html',
  styleUrls: ['./edit-student-info.component.css']
})
export class EditStudentInfoComponent implements OnInit {

  id: number = 0;
  studentForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute,private router:Router,private studentService:StudentService) {
    
    this.studentForm = new FormGroup({
      'id': new FormControl(this.id, Validators.required),
      'studentName': new FormControl('', Validators.required),
      'studentEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'class': new FormControl('', Validators.required)
    })

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.studentService.getStudentByID(paramsData.id).subscribe((data) => {
        console.log(data)
        this.studentForm.setValue(data)
      })
    })
  }


  submitdata() {
    Object.keys(this.studentForm.controls).forEach(field => {
      const control = this.studentForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
    if(this.studentForm.valid) {
      console.log(this.studentForm.value)
      this.studentService.updateStudentById(this.id,this.studentForm.value).subscribe(() => {
        this.router.navigate(["/all-enrolled-students"])
      })
    }
  }

}
