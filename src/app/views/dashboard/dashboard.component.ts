import { Component, OnInit } from "@angular/core";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { PalmHighschoolServiceService } from "../../services/palm-highschool-service.service";
import { StudentResults } from "../models/StudentResults.model";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Label } from "ng2-charts";
import { AverageResults } from "../models/AverageResults.model";

@Component({
  templateUrl: "dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  public passCount: number;
  public failCount: number;
  public studentRatePass: number;
  public studentRateFail: number;
  public totalStudents: number;
  public studentResults: StudentResults[];
  public studentAvgResult: AverageResults[];
  public subjectAvgResult: AverageResults[];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = "bar";
  barChartLegend = true;
  barChartPlugins = [];

  studentAvgScoredChartData: ChartDataSets[] = [];
  subjectAvgScoredChartData: ChartDataSets[] = [];

  constructor(
    private palmHighschoolServiceService: PalmHighschoolServiceService
  ) {}

  ngOnInit(): void {
    this.palmHighschoolServiceService
      .GetByStudentAverage()
      .subscribe((result) => {
        this.studentAvgResult = result;
        console.log(this.studentAvgResult);
        //this.barChartLabels = this.studentAvgResult.map(item => item.key);
        this.studentAvgResult.forEach((element) => {
          this.studentAvgScoredChartData.push({
            data: [element.value],
            label: element.key,
          });
        });
      });

    this.palmHighschoolServiceService
      .GetBySubjectAverage()
      .subscribe((result) => {
        this.subjectAvgResult = result;
        console.log(this.subjectAvgResult);
        //this.barChartLabels = result.map(item => item.key);
        this.subjectAvgResult.forEach((element) => {
          this.subjectAvgScoredChartData.push({
            data: [element.value],
            label: element.key,
          });
        });
      });

    this.palmHighschoolServiceService
      .GetStudentResults()
      .subscribe((result) => {
        this.studentResults = result;
        this.passCount = this.getCountByStatus('Pass');
        this.failCount = this.getCountByStatus('Fail');
        this.studentRatePass = this.getStudentRate('Pass'); 
        this.studentRateFail = this.getStudentRate('Fail');
        this.totalStudents = this.studentResults.length;
      });
  }

  getCountByStatus(status) {
    return this.studentResults.filter((o) => o.status === status).length;
  }

  getCountBySubject(subject) {
    return this.studentResults.filter((o) => o.subject === subject).length;
  }

  getStudentRate(status) {
    return Math.round(
      (this.getCountByStatus(status) / this.studentResults.length) * 100
    );
  }

  getSubjectRate(subject) {
    return Math.round(
      (this.getCountBySubject(subject) / this.studentResults.length) * 100
    );
  }

  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }
  public chartHovered(e: any): void {
    //console.log(e);
  }
}
