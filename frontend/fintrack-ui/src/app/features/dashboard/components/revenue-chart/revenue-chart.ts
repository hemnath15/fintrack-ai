import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexDataLabels,
  ApexTooltip
} from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-revenue-chart',
  imports: [  CommonModule,
    NgApexchartsModule,MatCardModule],
  templateUrl: './revenue-chart.html',
  styleUrl: './revenue-chart.css',
})
export class RevenueChart {
 chartSeries: ApexAxisChartSeries = [
    {
      name: 'Revenue',
      data: [120000,180000,160000,210000,250000,280000]
    }
  ];

  chart: ApexChart = {
    type: 'area',
    height: 340,
    toolbar: {
      show: false
    }
  };

  xaxis: ApexXAxis = {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun'
    ]
  };

  stroke: ApexStroke = {
    curve: 'smooth'
  };

  dataLabels: ApexDataLabels = {
    enabled: false
  };

  tooltip: ApexTooltip = {
    theme: 'light'
  };

}
