export interface AppError extends Error  {
  statusCode: number;
}

export class AppError {
  name;
  message;
  statusCode;
  
  constructor(statusCode: number, message: string) {
    this.name = "AppError";
    this.message = message;
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, AppError.prototype)
  }
}