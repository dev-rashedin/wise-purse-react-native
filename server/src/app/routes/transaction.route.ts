import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-toolkit';

const transactionRouter = Router();

transactionRouter.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Transaction route is working',
  });
});

export default transactionRouter;
