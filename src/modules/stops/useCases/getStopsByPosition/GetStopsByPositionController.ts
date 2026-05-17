import { Request, Response } from 'express';
import { GetStopsByPositionUseCase } from './GetStopsByPositionUseCase';

export class GetStopsByPositionController {
    private getStopsByPositionUseCase: GetStopsByPositionUseCase;

    constructor(getStopsByPositionUseCase: GetStopsByPositionUseCase) {
        this.getStopsByPositionUseCase = getStopsByPositionUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { latitude, longitude } = request.params;

        try {
            const stopsByPosition = await this.getStopsByPositionUseCase.execute({
                latitude: Number(latitude),
                longitude: Number(longitude),
            });

            return response.status(200).json(stopsByPosition);
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
