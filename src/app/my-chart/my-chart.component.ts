import { Component, OnInit } from '@angular/core';
import { QuandleAPIService } from '../Service/quandle-api.service';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.scss'],
})
export class MyChartComponent implements OnInit {
  constructor(private service: QuandleAPIService) {}

  chartData: any;

  xData: any[] = [];
  yData: any[] = [];
  color: any[] = [];

  ngOnInit(): void {
    this.showJsonData();

    // this.showConfig();
  }

  showJsonData() {
    this.service.getChartData().subscribe((result) => {
      this.chartData = result;
      // console.log('Json Data is: ', this.chartData);
      if (this.chartData != null) {
        for (let i = 0; i < this.chartData.length; i++) {
          const data = this.chartData[i];
          // console.log(data);
          this.xData.push(data.year);
          this.yData.push(data.amount);
          this.color.push(data.colorCode);
        }
        this.renderChart(this.xData, this.yData, this.color, 'bar', 'barChart');
        this.renderChart(this.xData, this.yData, this.color, 'pie', 'pieChart');
        this.renderChart(
          this.xData,
          this.yData,
          this.color,
          'line',
          'lineChart'
        );
        this.renderChart(
          this.xData,
          this.yData,
          this.color,
          'doughnut',
          'doughnutChart'
        );
        this.renderChart(
          this.xData,
          this.yData,
          this.color,
          'polarArea',
          'polarAreaChart'
        );
        this.renderChart(
          this.xData,
          this.yData,
          this.color,
          'radar',
          'radarChart'
        );
      }
      // console.log(this.colorData);
    });
    this.renderBubbleChart();
    this.renderScatterChart();
  }

  // showConfig() {
  //   this.service.getChartInfo().subscribe((api: any) => {
  //     console.log('quandle API is: ', api);
  //   });
  // }

  renderChart(
    labelData: any,
    mainData: any,
    colorData: any,
    type: any,
    id: any
  ) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labelData,
        datasets: [
          {
            label: '# of Votes',
            data: mainData,
            backgroundColor: colorData,
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  renderBubbleChart() {
    const data = {
      datasets: [
        {
          label: 'First Dataset',
          data: [
            {
              x: 20,
              y: 30,
              r: 15,
            },
            {
              x: 40,
              y: 10,
              r: 10,
            },
          ],
          backgroundColor: 'rgb(255, 99, 132)',
        },
      ],
    };
    const myChart = new Chart('bubbleChart', {
      type: 'bubble',
      data: data,

      options: {},
    });
  }

  renderScatterChart() {
    const data = {
      datasets: [
        {
          label: 'Scatter Dataset',
          data: [
            {
              x: -10,
              y: 0,
            },
            {
              x: 0,
              y: 10,
            },
            {
              x: 10,
              y: 5,
            },
            {
              x: 0.5,
              y: 5.5,
            },
          ],
          backgroundColor: 'rgb(255, 99, 132)',
        },
      ],
    };
    const myChart = new Chart('scatterChart', {
      type: 'scatter',
      data: data,

      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
        },
      },
    });
  }
}
