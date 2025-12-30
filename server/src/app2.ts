import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import { notFoundHandler, globalErrorHandler } from 'express-error-toolkit';
import { StatusCodes } from 'http-status-toolkit';

// routes
import apiV1Routes from '../routes/v1';

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

// Health check
app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ success: true, message: 'Server is running' });
});

// API versioned routes
app.use('/api/v1', apiV1Routes);

// 404 & global error handler
app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;
