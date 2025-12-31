import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import { notFoundHandler, globalErrorHandler } from 'express-error-toolkit';
import transactionRouter from './app/modules/transaction/transaction.route';
import { sendSuccessResponse } from './app/utils/sendSuccessResponse';

const app = express();

// Security middlewares
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Logging
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Rate limiter
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  })
);



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
