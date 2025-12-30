import { Request, Response } from 'express';
import { asyncHandler } from 'express-error-toolkit';
import { StatusCodes } from 'http-status-toolkit';
import { transactionService } from './transaction.service';

const getTransactions = asyncHandler(async (req: Request, res: Response) => {
   const user_id = req.params.userId?.trim();

  if (!user_id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'User id is required',
    });
  }

  const result = await transactionService.getTransactionsFromDB(user_id);

  return res.status(StatusCodes.OK).json({
    success: true,
    message: 'Transactions fetched successfully',
    data: result,
  });

});

const createTransaction = asyncHandler( async (req: Request, res: Response) => {
  const { title, amount, category, user_id } = req.body;

  if(!title || !amount || !category || !user_id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'All fields are required',
    })
  }
  
  const result = await transactionService.createTransactionInDB({title, amount, category, user_id});

  return res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Transaction created successfully',
    data: result,
  })

});

export const transactionController = {
  getTransactions,
  createTransaction
}