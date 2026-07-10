export interface RecentTransaction {

  date: string;

  description: string;

  category: string;

  amount: number;

  status: 'Paid' | 'Pending' | 'Received';

}