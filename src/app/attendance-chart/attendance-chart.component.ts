import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-attendance-chart',
  templateUrl: './attendance-chart.component.html',
  styleUrls: ['./attendance-chart.component.css']
})
export class AttendanceChartComponent implements OnInit {

  presentCount:Array<number> = [];
  absentCount:Array<number> = [];
  highChart: Chart =  new Chart({
    chart: {
        backgroundColor: '#EAECF4',
        borderRadius: 10
    },
    title: {
        text: 'Attandance Chart'
    },
    yAxis: {
        title: {
            text: 'Student Count',
            style: {
            color: "#5A5C69"
            }   
        },
        labels: {
        style: {
            color: "#5A5C69"
          }
        }
    },
    xAxis: {
        title: {
            style: {
            color: "#5A5C69"
            }   
        },
        labels: {
        style: {
            color: "#5A5C69"
          }
        },
        categories: ["Jan'21", "Feb'21", "Mar'21", "Apr'21", "May'21", "Jun'21", "Jul'21", "Aug'21", "Sep'21", "Oct'21", "Nov'21", "Dec'21"]
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
            cursor: 'pointer'
        }
    },
    series: [],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            }
        }]
    }
  });

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.studentService.getAllAttendanceRecords().subscribe((data) => {
      let n: number = new Date().getMonth() + 1;
      this.presentCount = new Array(n).fill(0);
      this.absentCount = new Array(n).fill(0);
      data.forEach(e => {
        let month = new Date(e.attendanceDate).getMonth();
        if(e.isPresent) {
          ++this.presentCount[month];
        } else {
          ++this.absentCount[month];
        }
      });
      this.highChart.addSeries({
          type: 'spline', 
          name: 'Present',
          data: this.presentCount
      },true,false);
     this.highChart.addSeries({
          type: 'spline', 
          name: 'Absent',
          data: this.absentCount
      },true,false);
     });
  }

}