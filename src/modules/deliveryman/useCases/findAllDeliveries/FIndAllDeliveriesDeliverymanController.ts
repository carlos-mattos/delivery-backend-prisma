import { Request, Response } from 'express';
import FindAllDeliveriesDeliverymanUseCase from './FindAllDeliveriesDeliverymanUseCase';

export default class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deliveryman_id = request.deliveryman_id
    
    const findAllDeliveriesDeliverymanUseCase = new FindAllDeliveriesDeliverymanUseCase()
    const deliveries = await findAllDeliveriesDeliverymanUseCase.execute(deliveryman_id)
    
    return response.json(deliveries)
  }
}