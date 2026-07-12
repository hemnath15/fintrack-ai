import { DashboardRepository } from '../repositories/dashboard.repository';

export class DashboardService {

  private repository = new DashboardRepository();

  async getSummary() {

    const summary = await this.repository.getSummary();

    return {
      revenue: summary.revenue,
      expenses: summary.expenses,
      profit: summary.revenue - summary.expenses,
      users: summary.users
    };

  }
async getRevenue() {

  return await this.repository.getRevenue();

}
async getExpenses() {

  return await this.repository.getExpenses();

}
async getRecentTransactions() {

  return await this.repository.getRecentTransactions();

}
}