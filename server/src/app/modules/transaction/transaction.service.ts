import { sql } from '@/app/config/db';
import { Summary, TransactionInput, TransactionOutput } from './transaction.interface';
import { NotFoundError } from 'express-error-toolkit';

export const mapTransaction = (row: any): TransactionOutput => ({
  id: row.id,
  title: row.title,
  amount: Number(row.amount),
  category: row.category,
  user_id: row.user_id,
  created_at: new Date(row.created_at),
});


// fetch all transactions from DB
const getTransactionsFromDB = async (
  user_id: string
): Promise<TransactionOutput[]> => {
  const result =
    await sql`SELECT * FROM transactions WHERE user_id = ${user_id} ORDER BY created_at DESC`;

  return result.map(mapTransaction);
};

// fetch transaction summary from DB
const getTransactionsSummaryFromDB = async (user_id: string): Promise<Summary> => {
 
  
  const incomeResult = await sql`
  SELECT COALESCE(SUM(amount), 0) as income FROM transactions where user_id = ${user_id} AND category = 'Income'
  `

  const expenseResult = await sql`
  SELECT COALESCE(SUM(amount), 0) as expense FROM transactions where user_id = ${user_id} AND category = 'Expense'
  `

  
  return {
    income: incomeResult[0].income,
    expense: expenseResult[0].expense,
  };
}

// create transaction in DB
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

// delete transaction from DB
const deleteTransactionFromDB = async (id: number): Promise<TransactionOutput> => {
  const result = await sql`DELETE FROM transactions WHERE id = ${id} RETURNING *`;
  
  if (!result.length) {
    throw new NotFoundError('Transaction not found');
  }

  console.log('result', result)
  

  return mapTransaction(result[0]);

};

export const transactionService = {
  getTransactionsFromDB,
  createTransactionInDB,
  deleteTransactionFromDB,
  getTransactionsSummaryFromDB
};
