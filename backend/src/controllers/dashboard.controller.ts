import { Request, Response } from 'express';
import { DashboardService } from '../services/dashboard.service';

const dashboardService = new DashboardService();

export class DashboardController {

  async getSummary(req: Request, res: Response) {

    try {

      const summary = await dashboardService.getSummary();

      return res.status(200).json({
        success: true,
        data: summary
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: 'Failed to load dashboard summary'
      });

    }

  }
async getRevenue(req: Request, res: Response) {

  try {

    const data = await dashboardService.getRevenue();

    return res.status(200).json({
      success: true,
      data
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: 'Failed to fetch revenue data'
    });

  }

}
async getExpenses(req: Request, res: Response) {

  try {

    const data = await dashboardService.getExpenses();

    return res.status(200).json({
      success: true,
      data
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: 'Failed to fetch expense distribution'
    });

  }

}
async getRecentTransactions(req: Request, res: Response) {

  try {

    const data = await dashboardService.getRecentTransactions();

    return res.status(200).json({
      success: true,
      data
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: 'Failed to fetch recent transactions'
    });

  }

}
}