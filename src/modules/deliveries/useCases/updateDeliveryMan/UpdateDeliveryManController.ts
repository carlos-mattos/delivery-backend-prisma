import { Request, Response } from 'express';
import UpdateDeliveryManUseCase from './UpdateDeliveryManUseCase';

export default class UpdateDeliveryManController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deliveryman_id = request.deliveryman_id
        const id_delivery = request.params.id_delivery

        const updateDeliveryManUseCase = new UpdateDeliveryManUseCase()
        const result = await updateDeliveryManUseCase.execute(id_delivery, deliveryman_id)

        return response.status(204).json(result);
    }
}