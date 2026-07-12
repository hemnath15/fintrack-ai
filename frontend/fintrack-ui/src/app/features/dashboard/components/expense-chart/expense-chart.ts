import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgApexchartsModule,
  ApexChart,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend
} from 'ng-apexcharts';

import { MatCardModule } from '@angular/material/card';
import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-expense-chart',
  imports: [ CommonModule,
    NgApexchartsModule,
    MatCardModule],
  templateUrl: './expense-chart.html',
  styleUrl: './expense-chart.css',
})
export class ExpenseChart implements OnInit {
    private dashboardService = inject(DashboardService);
    private cdr = inject(ChangeDetectorRef)
  ngOnInit(): void {

  this.dashboardService.getExpenses().subscribe({

    next: (response) => {

      this.series = response.data.map(item => item.amount);

      this.labels = response.data.map(item => item.category);
this.cdr.detectChanges()
    },

    error: (err) => {

      console.error(err);

    }

  });

}

   chart: ApexChart = {
    type: 'donut'
  };

  series: ApexNonAxisChartSeries = []

  labels: string[] = [];

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
