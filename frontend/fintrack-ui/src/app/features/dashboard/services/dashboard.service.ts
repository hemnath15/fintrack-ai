import { Injectable } from '@angular/core';

import { DashboardCard } from '../models/dashboard.model';
import { RevenueData } from '../models/revenue.model';
import { RecentTransaction } from '../models/recent-transaction.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getDashboardCards(): DashboardCard[] {

    return [

      {
        title: 'Revenue',
        value: '₹12,45,000',
        icon: 'payments',
        trend: '+12%',
        positive: true
      },

      {
        title: 'Expenses',
        value: '₹6,40,000',
        icon: 'account_balance_wallet',
        trend: '-3%',
        positive: false
      },

      {
        title: 'Profit',
        value: '₹6,05,000',
        icon: 'trending_up',
        trend: '+18%',
        positive: true
      },

      {
        title: 'Users',
        value: '284',
        icon: 'groups',
        trend: '+24',
        positive: true
      }

    ];

  }
getRevenue(): RevenueData[] {

  return [

    { month: 'Jan', revenue: 120000 },
    { month: 'Feb', revenue: 180000 },
    { month: 'Mar', revenue: 160000 },
    { month: 'Apr', revenue: 210000 },
    { month: 'May', revenue: 250000 },
    { month: 'Jun', revenue: 280000 }

  ];

}
getRecentTransactions(): RecentTransaction[] {

  return [

    {
      date: '10 Jul',
      description: 'AWS Hosting',
      category: 'Cloud',
      amount: 4200,
      status: 'Paid'
    },

    {
      date: '09 Jul',
      description: 'Salary',
      category: 'Income',
      amount: 90000,
      status: 'Received'
    },

    {
      date: '08 Jul',
      description: 'Office Internet',
      category: 'Utilities',
      amount: 1200,
      status: 'Paid'
    },

    {
      date: '07 Jul',
      description: 'Travel',
      category: 'Travel',
      amount: 3800,
      status: 'Pending'
    }

  ];

}
}