import { Request, Response } from 'express';
import UpdateEndDateUseCase from './UpdateEndDateUseCase';

export default class UpdateEndDateController {
    async handle(request: Request, response: Response): Promise<Response>{
        const deliveryman_id = request.deliveryman_id
        const id_delivery = request.params.id_delivery

        const updateEndDateUseCase = new UpdateEndDateUseCase()
        const result = await updateEndDateUseCase.execute(deliveryman_id, id_delivery)

        return response.status(204).json(result);
    }
}