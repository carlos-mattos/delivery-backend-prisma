import { Request, Response } from "express";
import CreateDeliveryUseCase from "./CreateDeliveryUseCase";

export default class CreateDeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { item_name } = request.body;
    const client_id = request.client_id;

    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const delivery = await createDeliveryUseCase.execute({
      id_client: client_id,
      item_name,
    });

    return response.json(delivery);
  }
}
