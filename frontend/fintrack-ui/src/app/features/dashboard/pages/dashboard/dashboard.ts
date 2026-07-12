import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { KpiCard } from '../../components/kpi-card/kpi-card';
import { RevenueChart } from '../../components/revenue-chart/revenue-chart';
import { AiInsights } from '../../components/ai-insights/ai-insights';
import { RecentTransactions } from '../../components/recent-transactions/recent-transactions';
import { DashboardService } from '../../services/dashboard.service';
import { ExpenseChart } from '../../components/expense-chart/expense-chart';
import { DashboardSummary } from '../../models/dashboard-summary.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule,KpiCard,RevenueChart,AiInsights,RecentTransactions,ExpenseChart,CommonModule

  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{
  private dashboardService = inject(DashboardService);
private cdr = inject(ChangeDetectorRef);
summary?: DashboardSummary;
  ngOnInit() {

    this.dashboardService.getSummary().subscribe({

        next:(response:any)=>{

           this.summary = response.data;
           this.cdr.detectChanges();
console.log("summary",this.summary)
        },
        error:(err)=>{
          console.error(err)
        }

    });

}
}
