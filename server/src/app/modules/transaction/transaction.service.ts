import { sql } from "@/app/config/db";
import { TransactionInput, TransactionOutput } from "./transaction.interface"


const getTransactionsFromDB = async (user_id: string): Promise<TransactionOutput[]> => {

  const result = await sql`SELECT * FROM transactions WHERE user_id = ${user_id} ORDER BY created_at DESC`;

  if (!result) {
    throw new Error('Failed to fetch transactions');
  }

  return result as TransactionOutput[]

}


const createTransactionInDB = async ({
  title,
  amount,
  category,
  user_id,
}: TransactionInput) : Promise<TransactionOutput> => {
  const result = await sql`INSERT INTO transactions (title, amount, category, user_id) VALUES (${title}, ${amount}, ${category}, ${user_id}) RETURNING *`;

  if (!result[0]) {
    throw new Error('Failed to create transaction');

  }

  return result[0] as TransactionOutput
};

export const transactionService = {
  getTransactionsFromDB,
  createTransactionInDB,
}