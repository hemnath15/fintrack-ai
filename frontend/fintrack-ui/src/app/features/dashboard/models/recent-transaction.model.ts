export interface RecentTransaction {

  transaction_date: string;

  title: string;

  category: string;

  amount: number;

  status: 'Paid' | 'Pending' | 'Received';

}