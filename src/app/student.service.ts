import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student, Attendance } from './modal';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  saveStudent(studentDetails:Student) {
    return this.http.post(`https://615ef420af365900172046b6.mockapi.io/prakharp/students`,studentDetails);
  }

  getAllStudent() {
    return this.http.get<Array<Student>>(`https://615ef420af365900172046b6.mockapi.io/prakharp/students`)
  }

  getStudentByID(id:number) {
    return this.http.get<Student>(`https://615ef420af365900172046b6.mockapi.io/prakharp/students/${id}`)
  }

  updateStudentById(studentId:number,studentdata:Student) {
    return this.http.put(`https://615ef420af365900172046b6.mockapi.io/prakharp/students/${studentId}`,studentdata)
  }

  deleteStudentById(id:number) {
    return this.http.delete(`https://615ef420af365900172046b6.mockapi.io/prakharp/students/${id}`)
  }

  saveAttendance(attendanceDetails: Attendance) {
    attendanceDetails.studentId = +attendanceDetails.studentId;
    attendanceDetails.isPresent = (attendanceDetails.isPresent.toString() == "true");
    return this.http.post(`https://615ef420af365900172046b6.mockapi.io/prakharp/attendance`,attendanceDetails);
  }

  getAllAttendanceRecords() {
    return this.http.get<Array<Attendance>>(`https://615ef420af365900172046b6.mockapi.io/prakharp/attendance`)
  }

  deleteAttendanceRecordById(id:number) {
    return this.http.delete(`https://615ef420af365900172046b6.mockapi.io/prakharp/attendance/${id}`)
  }

}
