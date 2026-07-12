import { pool } from '../config/database';

export class DashboardRepository {

  async getSummary() {

    const revenueResult = await pool.query(`
      SELECT COALESCE(SUM(amount),0) AS revenue
      FROM transactions
      WHERE transaction_type = 'Income'
    `);

    const expenseResult = await pool.query(`
      SELECT COALESCE(SUM(amount),0) AS expenses
      FROM transactions
      WHERE transaction_type = 'Expense'
    `);

    const userResult = await pool.query(`
      SELECT COUNT(*) AS users
      FROM users
    `);

    return {
      revenue: Number(revenueResult.rows[0].revenue),
      expenses: Number(expenseResult.rows[0].expenses),
      users: Number(userResult.rows[0].users)
    };

  }
async getRevenue() {

  const result = await pool.query(`
    SELECT
      TO_CHAR(transaction_date, 'Mon') AS month,
      SUM(amount) AS revenue
    FROM transactions
    WHERE transaction_type = 'Income'
    GROUP BY
      EXTRACT(MONTH FROM transaction_date),
      TO_CHAR(transaction_date, 'Mon')
    ORDER BY
      EXTRACT(MONTH FROM transaction_date)
  `);

  return result.rows.map(row => ({
    month: row.month,
    revenue: Number(row.revenue)
  }));

}
async getExpenses() {

  const result = await pool.query(`
    SELECT
      category,
      SUM(amount) AS amount
    FROM transactions
    WHERE transaction_type = 'Expense'
    GROUP BY category
    ORDER BY amount DESC
  `);

  return result.rows.map(row => ({
    category: row.category,
    amount: Number(row.amount)
  }));

}
async getRecentTransactions() {

  const result = await pool.query(`
    SELECT
      id,
      title,
      category,
      amount,
      status,
      transaction_date
    FROM transactions
    ORDER BY transaction_date DESC
    LIMIT 10
  `);

  return result.rows;

}
}