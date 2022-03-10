import { Request, Response } from "express";
import CreateDeliverymanUseCase from "./CreateDeliverymanUseCase";

export default class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createDeliveryUseCase = new CreateDeliverymanUseCase();
    const result = await createDeliveryUseCase.execute({ username, password });

    return response.json(result);
  }
}
