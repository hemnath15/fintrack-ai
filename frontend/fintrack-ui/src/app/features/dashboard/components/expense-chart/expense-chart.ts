import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgApexchartsModule,
  ApexChart,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend
} from 'ng-apexcharts';

import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-expense-chart',
  imports: [ CommonModule,
    NgApexchartsModule,
    MatCardModule],
  templateUrl: './expense-chart.html',
  styleUrl: './expense-chart.css',
})
export class ExpenseChart {
   chart: ApexChart = {
    type: 'donut'
  };

  series: ApexNonAxisChartSeries = [
    40,
    25,
    20,
    15
  ];

  labels: string[] = [
    'Salary',
    'Travel',
    'Office',
    'Misc'
  ];

  legend: ApexLegend = {
    position: 'bottom'
  };

  responsive: ApexResponsive[] = [
    {
      breakpoint: 768,
      options: {
        chart: {
          width: 280
        }
      }
    }
  ];

}
