import { Request, Response } from "express";
import { CreateEntryUseCase } from "../usesCases/CreateEntryUseCase";
import { CreateRecurringPatternUseCase } from "../usesCases/CreateRecurringPatternUseCase";

export class CreateEntryController {
  async handle(request: Request, response: Response) {
    const createEntryUseCase = new CreateEntryUseCase();
    const createRecurringPatternUseCase = new CreateRecurringPatternUseCase();

    const {
      separation_count,
      max_occurrences,
      recurring_type,
      ...rest
    } = request.body;

    const entryPayload = {
      ...rest,
      start_date: new Date(rest.start_date),
      end_date: rest.end_date ? new Date(rest.end_date) : null,
      owner_id: request.user_id,
    }

    const entry = await createEntryUseCase.execute(entryPayload);

    let recurringPattern = null;
    if (request.body.is_recurring) {
      recurringPattern = await createRecurringPatternUseCase.execute({
        entry_id: entry.id,
        separation_count: separation_count || 1,
        max_occurrences: max_occurrences || 1,
        recurring_type: 'MONTHLY',
      });
    }

    return response.status(200).json({
      entry,
      recurringPattern,
    });
  }
}