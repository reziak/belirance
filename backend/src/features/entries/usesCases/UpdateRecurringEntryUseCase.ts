import { prisma } from "../../../app/lib/prismaClient";
import { RecurringType } from '../../../app/types';

interface IUpdateRecurringEntryUseCase {
  entry_id: string;
  value?: number;
  start_date: Date;
  separation_count?: number;
  max_occurrences?: number;
  recurring_type?: RecurringType;
}

export class UpdateRecurringEntryUseCase {
  async execute({
    entry_id,
    value,
    start_date,
    separation_count,
    max_occurrences,
    recurring_type,
  }: IUpdateRecurringEntryUseCase) {
    const entry = await prisma.entries.findFirst({
      where: {
        id: entry_id,
        is_recurring: {
          equals: true,
        },
      },
    });

    if (!entry) {
      throw new Error('this is not a recurring entry');
    }

    const newEntryPayload = {
      description: entry.description,
      type: entry.type,
      value: value || entry.value,
      start_date: new Date(start_date),
      end_date: entry.end_date,
      is_recurring: true,
      tag_id: entry.tag_id,
      owner_id: entry.owner_id,
      parent_entry_id: entry.parent_entry_id || entry_id,
    }
    
    const [, newEntry, recurringPattern, ] = await prisma.$transaction([
      prisma.entries.update({
        where: {
          id: entry_id,
        },
        data: {
          end_date: new Date(start_date),
          is_recurring: false,
        },
      }),
      prisma.entries.create({
        data: {
          ...newEntryPayload,
        },
      }),
      prisma.recurringPattern.findFirst({
        where: {
          entry_id,
        },
        select: {
          separation_count: true,
          max_occurrences: true,
          recurring_type: true,
        },
      }),
      prisma.recurringPattern.delete({
        where: {
          entry_id,
        }
      }),
    ]);

    const recurring = await prisma.recurringPattern.create({
      data: {
        entry_id: newEntry.id,
        separation_count: separation_count || recurringPattern?.separation_count as number,
        max_occurrences: max_occurrences || recurringPattern?.max_occurrences as number,
        recurring_type: recurring_type || recurringPattern?.recurring_type as RecurringType
      },
    });

    return {
      entry: newEntry,
      recurringPattern: recurring,
    };
  }
}