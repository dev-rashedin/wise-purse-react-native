// inside your express-error-toolkit package
import { Response } from 'express';
import { StatusCode, StatusCodes, getStatusMessage } from 'http-status-toolkit';


interface SuccessResponseOptions<T = unknown> {
  readonly res: Response;
  readonly data?: T | null;
  readonly message?: string;
  readonly statusCode?: StatusCode;
}
export const sendSuccessResponse = <T = any>({
  res,
  data = null,
  message,
  statusCode = StatusCodes.OK,
}: SuccessResponseOptions<T>) => {
  
  const response: Record<string, any> = {
    success: true,
    message: message || getStatusMessage(statusCode),
  };

  if (data !== undefined && data !== null) {
    response.data = data;
  }

  res.status(statusCode).json(response);
};
