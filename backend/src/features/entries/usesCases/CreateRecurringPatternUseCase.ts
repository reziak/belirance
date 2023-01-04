import { RecurringType } from "../../../app/types";
import { prisma } from "../../../lib/prismaClient";

interface ICreateRecurringPattern {
  entry_id: string;
  separation_count: number;
  max_occurrences: number;
  recurring_type: RecurringType
}


export class CreateRecurringPatternUseCase {
  async execute({ 
    entry_id,
    separation_count,
    max_occurrences,
    recurring_type
  }: ICreateRecurringPattern) {
    const patternExist = await prisma.recurringPattern.findFirst({
      where: {
        entry_id
      },
    });

    if (patternExist) throw new Error("This pattern already exists");

    const recurringPattern = await prisma.recurringPattern.create({
      data: {
        entry_id,
        separation_count,
        max_occurrences,
        recurring_type,
      },
    });

    return recurringPattern;
  }
}