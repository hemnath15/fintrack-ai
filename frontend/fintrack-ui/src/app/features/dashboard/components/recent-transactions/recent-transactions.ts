import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

import { DashboardService } from '../../services/dashboard.service';
import { MatCardModule } from '@angular/material/card';
import { RecentTransaction } from '../../models/recent-transaction.model';

@Component({
  selector: 'app-recent-transactions',
  imports: [ CommonModule,
    MatTableModule,
    MatChipsModule,MatCardModule],
  templateUrl: './recent-transactions.html',
  styleUrl: './recent-transactions.css',
})
export class RecentTransactions implements OnInit{
   private dashboardService = inject(DashboardService);
private cdr = inject(ChangeDetectorRef);
  displayedColumns: string[] = [
    'transaction_date',
    'title',
    'category',
    'amount',
    'status'
  ];

  dataSource: RecentTransaction[] = [];
  ngOnInit(): void {

    this.dashboardService.getRecentTransactions().subscribe({

      next: (response) => {

        this.dataSource = response.data;
this.cdr.detectChanges()
      },

      error: (err) => {

        console.error(err);

      }

    });

  }

}
