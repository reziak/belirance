import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../app/lib/AppError";
import { prisma } from "../../../app/lib/prismaClient";

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) throw new AppError(400, "Invalid email or password");

    const matchingPassword = await compare(password, user.password);

    if (!matchingPassword) throw new AppError(400, "Invalid email or password");

    const token = sign({ email }, process.env.SECRET_KEY as string, {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}