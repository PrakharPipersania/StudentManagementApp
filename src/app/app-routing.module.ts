import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentEntryComponent } from './create-student-entry/create-student-entry.component';
import { EditStudentInfoComponent } from './edit-student-info/edit-student-info.component';
import { AttendanceDetailsComponent } from './attendance-details/attendance-details.component';
import { GiveAttendanceComponent } from './give-attendance/give-attendance.component';
import { CheckAttendanceComponent } from './check-attendance/check-attendance.component';
import { AllAttendanceRecordsComponent } from './all-attendance-records/all-attendance-records.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "enroll-student",
    component: CreateStudentEntryComponent
  },
  {
    path: "edit-student-info/:id",
    component: EditStudentInfoComponent
  },
  {
    path: "all-enrolled-students",
    component: StudentListComponent
  },
  {
    path: "attendance-details",
    component: AttendanceDetailsComponent
  },
  {
    path: "mark-attendance/:id",
    component: GiveAttendanceComponent
  },
  {
    path: "check-attendance/:id",
    component: CheckAttendanceComponent
  },
  {
    path: "all-attendance-records",
    component: AllAttendanceRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
