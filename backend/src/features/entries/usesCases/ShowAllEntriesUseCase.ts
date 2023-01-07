import { pageMeta } from "../../../app/lib/pageMeta";
import { prisma } from "../../../app/lib/prismaClient";

interface IShowAllEntries {
  owner_id: string;
  page?: number;
  limit?: number;
}

export class ShowAllEntriesUseCase {
  async execute({ owner_id, page = 1, limit = 10 }: IShowAllEntries) {
    const [entries, count] = await prisma.$transaction([
      prisma.entries.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: {
          owner_id,
        },
        orderBy: {
          start_date: 'desc',
        },
        include: {
          tag: true,
          RecurringPattern: true,
        }
      }),
      prisma.entries.count({
        where: {
          owner_id,
        }
      }),
    ]);

    const meta = pageMeta('entries', { count, page, limit });

    return {
      meta,
      results: entries,
    };
  }
}