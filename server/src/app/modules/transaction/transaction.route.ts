import { Router } from 'express';
import { transactionController } from './transaction.controller';

const transactionRouter = Router();

transactionRouter.get('/', transactionController.getTransactions);

transactionRouter.post('/', transactionController.createTransaction);

export default transactionRouter;
