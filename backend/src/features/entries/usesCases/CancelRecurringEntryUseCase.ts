import { prisma } from "../../../lib/prismaClient";

interface ICancelRecurringEntryUseCase {
  entry_id: string;
}

export class CancelRecurringEntryUseCase {
  async execute({ 
    entry_id,
  }: ICancelRecurringEntryUseCase) {
    const entry = await prisma.entries.findFirst({
      where: {
        id: entry_id,
        is_recurring: {
          equals: true,
        }
      }
    });

    if (!entry) {
      throw new Error('this is not a recurring entry');
    }

    const change_date = new Date(Date.now());

    const entryCanceled = await prisma.entries.update({
      where: {
        id: entry_id,
      },
      data: {
        end_date: change_date,
      },
    });

    return entryCanceled;
  }
}