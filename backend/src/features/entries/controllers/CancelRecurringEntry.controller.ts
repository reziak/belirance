import { Request, Response } from "express";
import { CancelRecurringEntryUseCase } from "../usesCases/CancelRecurringEntryUseCase";

export class CancelRecurringEntryController {
  async handle(request: Request, response: Response) {
    const cancelRecurringEntryUseCase = new CancelRecurringEntryUseCase();

    const { id: entry_id } = request.params;

    const entry = await cancelRecurringEntryUseCase.execute({ entry_id });

    return response.status(201).json(entry);
  }
}