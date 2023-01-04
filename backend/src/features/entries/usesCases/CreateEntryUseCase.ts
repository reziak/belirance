import { EntryType } from "../../../app/types";
import { prisma } from "../../../lib/prismaClient";

interface ICreateEntryUseCase {
  description: string;
  type: EntryType;
  value: number;
  start_date: Date;
  end_date: Date;
  is_recurring?: boolean;
  tag_id: string;
  owner_id: string;
  parent_entry_id?: string;
}

export class CreateEntryUseCase {
  async execute(body: ICreateEntryUseCase) {
    const entry = await prisma.entries.create({
      data: {
        ...body,
      },
    });

    return entry;
  }
}