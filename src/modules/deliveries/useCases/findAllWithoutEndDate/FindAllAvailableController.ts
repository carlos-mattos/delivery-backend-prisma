import { Request, Response } from 'express';
import FindAllAvailableUseCase from './FindAllAvailableUseCase';

export default class FindAllAvailableController {
    async handle(request: Request, response: Response): Promise<Response> {
        const findAllAvailableUseCase = new FindAllAvailableUseCase();
        const result = await findAllAvailableUseCase.execute()
        
        return response.json(result);
    }
}