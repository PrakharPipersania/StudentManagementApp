import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student, Attendance } from '../modal';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-check-attendance',
  templateUrl: './check-attendance.component.html',
  styleUrls: ['./check-attendance.component.css']
})
export class CheckAttendanceComponent implements OnInit {
  id: number = 0;
  studentName: string ="";
  studentAttendanceList:Array<Attendance> = [];

  constructor(private activeRoute: ActivatedRoute,private studentService:StudentService) {
   console.log(this.studentAttendanceList)
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
    })
    this.studentService.getStudentByID(this.id).subscribe((data) => {
      this.studentName = data.studentName;
    }) 
    this.loadData();
  }

  loadData(){
    this.studentService.getAllAttendanceRecords().subscribe((data) => {
      this.studentAttendanceList = data.filter((obj) => {
        return (obj.studentId == this.id);
      })
      console.log(this.studentAttendanceList);
     })
  }

  deleteAttendanceRecord(id:number) {
    this.studentService.deleteAttendanceRecordById(id).subscribe(() => {
      this.loadData()
    })
  }

}
