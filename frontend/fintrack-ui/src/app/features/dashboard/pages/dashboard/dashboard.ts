import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { KpiCard } from '../../components/kpi-card/kpi-card';
import { RevenueChart } from '../../components/revenue-chart/revenue-chart';
import { AiInsights } from '../../components/ai-insights/ai-insights';
import { RecentTransactions } from '../../components/recent-transactions/recent-transactions';
import { DashboardService } from '../../services/dashboard.service';
import { ExpenseChart } from '../../components/expense-chart/expense-chart';


@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule,KpiCard,RevenueChart,AiInsights,RecentTransactions,ExpenseChart

  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private dashboardService = inject(DashboardService);
  cards = this.dashboardService.getDashboardCards();
}
