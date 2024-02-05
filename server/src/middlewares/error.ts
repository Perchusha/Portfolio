import { Request, Response } from 'express';
import { CustomError } from '../utils/customError';

export const errorHandler = async (error: CustomError, req: Request, res: Response) => {
  res.status(error.httpCode).json({
    name: error.name,
    message: error.message,
  });
};
