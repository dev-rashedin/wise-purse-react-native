import { StatusCodes } from "http-status-toolkit";

export const sendSuccessResponse = (res: any, message: string, data: any) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message,
    data,
  });
};