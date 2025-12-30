import express, { Request, Response } from 'express';
import cors from 'cors';
import { notFoundHandler, globalErrorHandler } from 'express-error-toolkit';
import transactionRouter from './app/modules/transaction/transaction.route';
import { sendSuccessResponse } from './app/utils/response';

const app = express();

// cors and body parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home route
app.get('/', (_req: Request, res: Response) => {
  return sendSuccessResponse({ res, message: 'Welcome to WisePurse API' });
});

// routes
app.use('/api/v1/transactions', transactionRouter);

// not found handler and global error handler
app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;
