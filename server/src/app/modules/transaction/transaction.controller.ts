import { Request, Response } from 'express';
import { asyncHandler, BadRequestError, NotFoundError } from 'express-error-toolkit';
import { transactionService } from './transaction.service';
import { sendSuccessResponse } from '@/app/utils/response';

// get all transactions
const getTransactions = asyncHandler(async (req: Request, res: Response) => {
  const user_id = req.params.userId?.trim();

  if (!user_id) throw new NotFoundError('User ID is required');

  const result = await transactionService.getTransactionsFromDB(user_id);

  const message = result.length === 0
      ? 'No transactions found'
    : 'Transactions fetched successfully';

 return sendSuccessResponse({ res, data: result, message });
});

// get transaction summary
const getTransactionSummary = asyncHandler(async (req: Request, res: Response) => {

  const user_id = req.params.userId?.trim();

  if (!user_id) throw new BadRequestError('User ID is required');
  

  const result = await transactionService.getTransactionsSummaryFromDB(user_id);

  console.log('result inside controller', result)
  

  return sendSuccessResponse({ res, data: result, message: 'Transaction summary fetched successfully' });
})

// create transaction
const createTransaction = asyncHandler(async (req: Request, res: Response) => {
  const { title, amount, category, user_id } = req.body;

  if (!title || !amount || !category || !user_id) throw new BadRequestError('All fields are required');

  const result = await transactionService.createTransactionInDB({
    title,
    amount,
    category,
    user_id,
  });

  return sendSuccessResponse({ res, data: result, message: 'Transaction created successfully' });
});

// delete transaction
const deleteTransaction = asyncHandler(async (req: Request, res: Response) => {

  const id = req.params.userId?.trim();

  if (!id) throw new BadRequestError('Id is required');

  if(isNaN(Number(id))) throw new BadRequestError('Invalid id');

  const result =await transactionService.deleteTransactionFromDB(Number(id));

  return sendSuccessResponse({ res, data: result, message: 'Transaction deleted successfully' });

});

export const transactionController = {
  getTransactions,
  createTransaction,
  deleteTransaction,
  getTransactionSummary
};
