import { Request, Response } from "express";
import { ShowAllEntriesUseCase } from "../usesCases/ShowAllEntriesUseCase";

export class ShowAllEntriesController {
  async handle(request: Request, response: Response) {
    const showAllEntriesUseCase = new ShowAllEntriesUseCase();

    const { page, limit } = request.query;

    const entries = await showAllEntriesUseCase.execute({ 
      owner_id: request.user_id,
      page: page ? +page : 1,
      limit: limit ? +limit : 10,
    });

    return response.status(200).json(entries);
  }
}