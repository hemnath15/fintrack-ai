import { Router } from 'express';
import { DashboardController } from '../controllers/dashboard.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();
const controller = new DashboardController();

router.get(
  '/summary',
  authenticate,
  (req, res) => controller.getSummary(req, res)
);
router.get(
  '/revenue',
  authenticate,
  (req, res) => controller.getRevenue(req, res)
);
router.get(
  '/expenses',
  authenticate,
  (req, res) => controller.getExpenses(req, res)
);
router.get(
  '/recent-transactions',
  authenticate,
  (req, res) => controller.getRecentTransactions(req, res)
);
export default router;