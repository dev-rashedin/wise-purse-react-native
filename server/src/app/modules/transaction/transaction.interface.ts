export interface TransactionInput {
  title: string;
  amount: number;
  category: string;
  user_id: string;
}

export interface TransactionOutput extends TransactionInput {
  id: number;
  created_at: Date;
}

export interface Summary {
  income: number;
  expense: number;
}