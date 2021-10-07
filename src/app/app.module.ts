import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentEntryComponent } from './create-student-entry/create-student-entry.component';
import { EditStudentInfoComponent } from './edit-student-info/edit-student-info.component';
import { AttendanceDetailsComponent } from './attendance-details/attendance-details.component';
import { GiveAttendanceComponent } from './give-attendance/give-attendance.component';
import { CheckAttendanceComponent } from './check-attendance/check-attendance.component';
import { AllAttendanceRecordsComponent } from './all-attendance-records/all-attendance-records.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    FooterComponent,
    HomeComponent,
    StudentListComponent,
    CreateStudentEntryComponent,
    EditStudentInfoComponent,
    AttendanceDetailsComponent,
    GiveAttendanceComponent,
    CheckAttendanceComponent,
    AllAttendanceRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
