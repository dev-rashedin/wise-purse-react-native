import { Router } from 'express';
import { transactionController } from './transaction.controller';

const transactionRouter = Router();



transactionRouter.get('/summary/:userId', transactionController.getTransactionSummary);

transactionRouter.get('/:userId', transactionController.getTransactions);

transactionRouter.post('/', transactionController.createTransaction);

transactionRouter.delete('/:userId', transactionController.deleteTransaction);

export default transactionRouter;
