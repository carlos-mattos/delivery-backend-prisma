import { Request, Response } from "express";
import AuthenticateDeliverymanUseCase from "./AuthenticateDeliverymanUseCase";

export default class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateDeliverymantUseCase =
      new AuthenticateDeliverymanUseCase();
    const token = await authenticateDeliverymantUseCase.execute({
      password,
      username,
    });

    return response.json({ token });
  }
}
