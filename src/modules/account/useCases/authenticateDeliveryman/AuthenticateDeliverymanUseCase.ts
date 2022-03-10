import prisma from "../../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthDeliveryman {
  username: string;
  password: string;
}

export default class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("Username or password is incorrect");
    }

    const isPasswordCorrect = await compare(password, deliveryman.password);

    if (!isPasswordCorrect) {
      throw new Error("Username or password is incorrect");
    }

    const token = sign({ username }, "B7558C5F4B9C820B8174B79ED6E8D808", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}
