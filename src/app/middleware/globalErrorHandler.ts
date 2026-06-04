/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import AppError from "../errorHelpers/AppError.js";

export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    
    let statusCode =  StatusCodes.INTERNAL_SERVER_ERROR
    let message = 'An unexpected error occurred'
    if (err instanceof AppError) {
      statusCode = err.statuscode
      message = err.message
    }
    else if (err instanceof Error) {
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
        message = err.message
    }

    res.status(statusCode).json({
        success: false,
        message,
        err,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
}
