import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  // Pie
  url:any="http://localhost:5010/students/chart";
  course:any;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['Python_Cop','Python_Proffessional', 'AWS', 'Data Science'];
  public pieChartData: number[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      // backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(23,25,30,255)'],
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5'],
    },
  ];

  constructor(public http:HttpClient) { }

  pieBackend(){
    const headers= new HttpHeaders({
      "Access-Control-Allow-Origin": "*",

    })
    this.http.get('http://localhost:5010/students/chart',{'headers':headers}).subscribe(
      data=>{
        console.log(data);
        this.course=data;
         this.pieChartData=[data['Python_Cop'],data['Python_Proffessional'],data['AWS'],data['Data_Science']];

        
      }

    )
  }

  ngOnInit() {
    this.pieBackend()
  }

  
}