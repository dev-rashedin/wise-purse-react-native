import { sql } from "@/app/config/db";
import { TransactionInput, TransactionOutput } from "./transaction.interface"


const createTransactionInDB = async ({
  title,
  amount,
  category,
  user_id,
}: TransactionInput) : Promise<TransactionOutput> => {
  const result = await sql`INSERT INTO transactions (title, amount, category, user_id) VALUES (${title}, ${amount}, ${category}, ${user_id}) RETURNING *`;

  return result[0] as TransactionOutput
};

export const transactionService = {
  createTransactionInDB
}