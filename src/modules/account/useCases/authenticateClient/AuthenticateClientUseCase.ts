import prisma from "../../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthClient {
  username: string;
  password: string;
}

export default class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Username or password is incorrect");
    }

    const isPasswordCorrect = await compare(password, client.password);

    if (!isPasswordCorrect) {
      throw new Error("Username or password is incorrect");
    }

    const token = sign({ username }, "B7558C5F4B9C820B8174B79ED6E8D808", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
