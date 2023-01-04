import { Request, Response } from "express";
import { CreateTagUseCase } from "../useCases/CreateTagUseCase";

export class CreateTagController {
  async handle(request: Request, response: Response) {
    const createTagUseCase = new CreateTagUseCase();

    const payload = {
      ...request.body,
      owner_id: request.user_id,
    }

    const result = await createTagUseCase.execute(payload);
    
    return response.status(200).json(result);
  }
}
