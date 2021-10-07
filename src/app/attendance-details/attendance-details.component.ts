import { Component, OnInit } from '@angular/core';
import { Student } from '../modal';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-attendance-details',
  templateUrl: './attendance-details.component.html',
  styleUrls: ['./attendance-details.component.css']
})
export class AttendanceDetailsComponent implements OnInit {

  studentList:Array<Student> = [];

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.studentService.getAllStudent().subscribe((data) => {
      this.studentList = data
     })
  }

}
