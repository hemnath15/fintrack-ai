import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis
} from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-revenue-chart',
  imports: [  CommonModule,
    NgApexchartsModule,MatCardModule],
  templateUrl: './revenue-chart.html',
  styleUrl: './revenue-chart.css',
})
export class RevenueChart implements OnInit {

  private dashboardService = inject(DashboardService);
private cdr = inject(ChangeDetectorRef);
  chartSeries: ApexAxisChartSeries = [];

  chart: ApexChart = {
    type: 'area',
    height: 340,
    toolbar: {
      show: false
    }
  };

  xaxis: ApexXAxis = {
    categories: []
  };

  yaxis: ApexYAxis = {
    labels: {
      formatter: (value: number) => `₹${value}`
    }
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

  ngOnInit(): void {

    this.loadRevenue();

  }

  loadRevenue(): void {

    this.dashboardService.getRevenue().subscribe({

      next: (response) => {

        this.chartSeries = [

          {
            name: 'Revenue',
            data: response.data.map(item => item.revenue)
          }

        ];

        this.xaxis = {

          categories: response.data.map(item => item.month)

        };
this.cdr.detectChanges()
      },

      error: (err) => {

        console.error(err);

      }

    });

  }

}
