import { Request, Response } from "express";
import { UpdateRecurringEntryUseCase } from "../usesCases/UpdateRecurringEntryUseCase";

export class UpdateRecurringEntryController {
  async handle(request: Request, response: Response) {
    const updateRecurringEntryUseCase = new UpdateRecurringEntryUseCase();

    const { id: entry_id } = request.params;
    const { 
      value, 
      start_date, 
      separation_count,
      max_occurrences,
      recurring_type,
    } = request.body;

    const entry = await updateRecurringEntryUseCase.execute({
      entry_id,
      value,
      start_date,
      separation_count,
      max_occurrences,
      recurring_type,
    });

    return response.status(201).json(entry);
  }
}