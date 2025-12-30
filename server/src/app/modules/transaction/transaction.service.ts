import { sql } from '@/app/config/db';
import { TransactionInput, TransactionOutput } from './transaction.interface';

export const mapTransaction = (row: any): TransactionOutput => ({
  id: row.id,
  title: row.title,
  amount: Number(row.amount),
  category: row.category,
  user_id: row.user_id,
  created_at: new Date(row.created_at),
});

// get all transactions
const getTransactionsFromDB = async (
  user_id: string
): Promise<TransactionOutput[]> => {
  const result =
    await sql`SELECT * FROM transactions WHERE user_id = ${user_id} ORDER BY created_at DESC`;

  return result.map(mapTransaction);
};

// create transaction
const createTransactionInDB = async ({
  title,
  amount,
  category,
  user_id,
}: TransactionInput): Promise<TransactionOutput> => {
  const result =
    await sql`INSERT INTO transactions (title, amount, category, user_id) VALUES (${title}, ${amount}, ${category}, ${user_id}) RETURNING *`;
  
  if (!result.length) {
    throw new Error('Failed to create transaction');
  }

  return mapTransaction(result[0]);
};

// delete transaction
const deleteTransactionFromDB = async (user_id: string): Promise<void> => {
  const result = await sql`DELETE FROM transactions WHERE id = ${user_id} RETURNING *`;
  
  if (!result.length) {
    throw new Error('Transaction deletion failed unexpectedly');
  }

  return;

};

export const transactionService = {
  getTransactionsFromDB,
  createTransactionInDB,
  deleteTransactionFromDB
};
