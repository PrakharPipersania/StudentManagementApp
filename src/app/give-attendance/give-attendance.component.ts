import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-give-attendance',
  templateUrl: './give-attendance.component.html',
  styleUrls: ['./give-attendance.component.css']
})
export class GiveAttendanceComponent implements OnInit {

  id: number = 0;
  minDate: string = "2021-01-01";
  maxDate: string = new Date().toLocaleDateString();
  attendanceForm:FormGroup;

  constructor(private activeRoute: ActivatedRoute,private router:Router,private studentService:StudentService) {
    this.maxDate = this.maxDate.substr(6,4)+"-"+this.maxDate.substr(0,2)+"-"+this.maxDate.substr(3,2);
    this.attendanceForm = new FormGroup({
      'studentId': new FormControl('', Validators.required),
      'attendanceDate': new FormControl('', Validators.required),
      'isPresent': new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.attendanceForm.setValue({
        'studentId': this.id,
        'attendanceDate': this.maxDate,
        'isPresent': ''
      });
    })
  }

  submitAttendance(){
    Object.keys(this.attendanceForm.controls).forEach(field => {
      const control = this.attendanceForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
    if(this.attendanceForm.valid){
      console.log(this.attendanceForm.value);
      this.studentService.saveAttendance(this.attendanceForm.value).subscribe(() => {
        this.router.navigate([`/check-attendance/${this.id}`])
      },() => {
        alert("Something Went Wrong!")
      })
      
    }
  }

}
