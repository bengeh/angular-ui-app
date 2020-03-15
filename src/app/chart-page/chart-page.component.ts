import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { arrayMax } from '../utils/common';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit {
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartDataArray = [];
  public barChartData = [];
  public tickMax = 0;
  public barChartOptions = {};

  constructor(private router: Router) {
    console.log("HENLO NEW HISTORY WINDOW STATE....", this.router.getCurrentNavigation().extras.state)
    console.log([this.router.getCurrentNavigation().extras.state].sort(function(a: any,b: any) {
      console.log(a)
      debugger;
      console.log("bbbbb...." ,b)
      return a-b
    }))
    this.router.getCurrentNavigation().extras.state.forEach((value: any, key: any) =>{
      
      console.log("this the key...", key)
      console.log("this the value...", value)
      this.barChartLabels.push(key)
      this.barChartDataArray.push(value)
    })
    this.barChartData.push({
      data: this.barChartDataArray
    })
    this.tickMax = arrayMax(this.barChartDataArray)
    console.log("new tickmax...", this.tickMax)
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      scales:{
        yAxes:[{
          ticks: {
            min: 0,
            max: this.tickMax,
            stepSize: 1
          }
        }]
        
      }
   }
  };

  // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType = 'bar';
  // public barChartLegend = true;
  // public barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];
  ngOnInit() {
  }

}
