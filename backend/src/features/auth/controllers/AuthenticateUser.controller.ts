import { NextFunction, Request, Response } from "express";
import { AuthenticateUserUseCase } from "../useCases/AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const authenticateUserUseCase = new AuthenticateUserUseCase();

    const result = await authenticateUserUseCase.execute(request.body);
      
    return response.status(200).json(result);
  }
}
