import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router) {
    console.log("HENLO NEW HISTORY WINDOW STATE....", this.router.getCurrentNavigation().extras.state)
    this.router.getCurrentNavigation().extras.state.forEach((value: any, key: any) =>{
      console.log("this the key...", key)
      console.log("this the value...", value)
      this.barChartLabels.push(key)
      this.barChartDataArray.push(value)
    })
    this.barChartData.push({
      data: this.barChartDataArray
    })
   }
   
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
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
