import { Request, Response } from 'express';
import FindAllDeliveriesUseCase from './FindAllDeliveriesUseCase';

export default class FindAllDeliveriesController{
    async handle(request: Request, response: Response): Promise<Response> {
        const client_id = request.client_id
        
        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase()
        const deliveries = await findAllDeliveriesUseCase.execute(client_id)

        return response.json(deliveries)
    }
}