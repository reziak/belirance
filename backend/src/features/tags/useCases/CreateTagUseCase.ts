import { prisma } from "../../../lib/prismaClient";

interface ICreateTag {
  name: string;
  icon: string;
  owner_id: string;
}

export class CreateTagUseCase {
  async execute(body: ICreateTag) {
    const nameExistsForUser = await prisma.tags.findFirst({
      where: {
        name: {
          mode: "insensitive",
          equals: body.name
        },
        owner_id: body.owner_id,
      }
    });

    if (nameExistsForUser) throw new Error("This tag was already created by this user.")

    const tag = await prisma.tags.create({
      data: {
        ...body,
      },
    });
    return tag;
  }
}