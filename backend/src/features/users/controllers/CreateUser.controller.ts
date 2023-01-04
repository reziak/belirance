import { Request, Response } from "express";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUserUseCase = new CreateUserUseCase();
    
    const result = await createUserUseCase.execute(request.body);
    
    return response.status(200).json(result);
  }
}
