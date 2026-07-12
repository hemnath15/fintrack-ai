import { inject, Injectable } from '@angular/core';

import { DashboardCard } from '../models/dashboard.model';
import { RevenueData } from '../models/revenue.model';
import { RecentTransaction } from '../models/recent-transaction.model';
import { DashboardSummary } from '../models/dashboard-summary.model';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ExpenseData } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
private http = inject(HttpClient)

getSummary() {

  return this.http.get<{
    success: boolean;
    data: DashboardSummary;
  }>(
    `${environment.apiUrl}/dashboard/summary`
  );

}
getRevenue() {

  return this.http.get<{
    success: boolean;
    data: RevenueData[];
  }>(
    `${environment.apiUrl}/dashboard/revenue`
  );

}
getExpenses() {

  return this.http.get<{
    success: boolean;
    data: ExpenseData[];
  }>(
    `${environment.apiUrl}/dashboard/expenses`
  );

}
getRecentTransactions() {

  return this.http.get<{
    success:boolean;
    data: RecentTransaction[];
  }>(
    `${environment.apiUrl}/dashboard/recent-transactions`
  );

}
}