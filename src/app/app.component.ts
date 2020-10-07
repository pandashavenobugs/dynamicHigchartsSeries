import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsExporting from "highcharts/modules/exporting";
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "app";
  chart;
  updateFlag = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  chartOptions = {
    series: [
      {
        name:'1212',
        data: [1, 2, 3, 6, 9],
        type:'line',
        color:'#f5ef42'
      }
    ],
    exporting: {
      enabled: true
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: "Data"
      }
    }
  };

  constructor() {
    const self = this;

    this.chartCallback = chart => {
      // saving chart reference
      self.chart = chart;
    };
  }

  ngOnInit() {

  }

  updateChart() {
    this.chartOptions.series=[
      {data:[1,2,3,4,5,6,7],
      name:'deneme',
      type:'area',
    color:'#f542d1'},
      {data:[10,20,30,40],
        name:'deneme1',
        type:'line',
      color:'#42b0f5'},
      {
        data:[100,200,300],
        name:'deneme2',
        type:'area',
        color:'#38a832'
      }
    ]
    this.updateFlag=true
  //   const self = this,
  //     chart = this.chart;

  //   chart.showLoading();
  //   setTimeout(() => {
  //     chart.hideLoading();

  //     self.chartOptions.series = [
  //       {
  //         data: [10, 25, 15]
  //       },
  //       {
  //         data: [12, 15, 10]
  //       }
  //     ];

  //     self.chartOptions.title = {
  //       text: "Updated title!"
  //     };

  //     self.updateFlag = true;
  //   }, 2000);
  }


}
