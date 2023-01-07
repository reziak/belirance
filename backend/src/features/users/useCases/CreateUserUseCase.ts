import { hash } from "bcrypt";
import { prisma } from "../../../app/lib/prismaClient";

interface ICreateUser {
  email: string;
  password: string;
}

export class CreateUserUseCase {
  async execute(body: ICreateUser) {
    const clientExist = await prisma.users.findFirst({
      where: {
        email: {
          mode: "insensitive",
          equals: body.email,
        },
      },
    });

    if (clientExist) throw new Error("User already exists with this email");

    const hashPassword = await hash(body.password, 10);

    const user = await prisma.users.create({
      data: {
        ...body,
        password: hashPassword,
      }
    });

    return user;
  }
}