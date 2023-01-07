import { NextFunction, Request, Response } from "express";
import { AppError } from "../lib/AppError";

interface ErrorResponse {
  message: string;
  stack?: string;
}

export function errorHandler(err: Error, req: Request, res: Response<ErrorResponse>, next: NextFunction) {
  let statusCode: number;
  if (err instanceof AppError) {
    statusCode = err.statusCode;
  } else {
    statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  }
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}