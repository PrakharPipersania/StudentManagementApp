import { Component, OnInit } from '@angular/core';
import { Attendance } from '../modal';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-all-attendance-records',
  templateUrl: './all-attendance-records.component.html',
  styleUrls: ['./all-attendance-records.component.css']
})
export class AllAttendanceRecordsComponent implements OnInit {

  studentAttendanceList:Array<Attendance> = [];

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.studentService.getAllAttendanceRecords().subscribe((data) => {
      this.studentAttendanceList = data.filter((obj) => {
        return obj.isPresent;
      })
      // console.log(this.studentAttendanceList);
     })
  }

  deleteAttendanceRecord(id:number) {
    this.studentService.deleteAttendanceRecordById(id).subscribe(() => {
      this.loadData()
    })
  }

}
