import { Request, Response } from 'express';
import { GetAllStopsUseCase } from './GetAllStopsUseCase';

export class GetAllStopsController {
    private getAllStopUseCase: GetAllStopsUseCase;

    constructor(GetAllStopUseCase: GetAllStopsUseCase) {
        this.getAllStopUseCase = GetAllStopUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const stops = await this.getAllStopUseCase.execute();

            return response.status(200).json(stops);
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
