import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

import { DashboardService } from '../../services/dashboard.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-recent-transactions',
  imports: [ CommonModule,
    MatTableModule,
    MatChipsModule,MatCardModule],
  templateUrl: './recent-transactions.html',
  styleUrl: './recent-transactions.css',
})
export class RecentTransactions {
   private dashboardService = inject(DashboardService);

  displayedColumns: string[] = [
    'date',
    'description',
    'category',
    'amount',
    'status'
  ];

  dataSource = this.dashboardService.getRecentTransactions();
}
