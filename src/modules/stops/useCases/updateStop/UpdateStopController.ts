import { Request, Response } from 'express';
import { UpdateStopUseCase } from './UpdateStopUseCase';

export class UpdateStopController {
    private updateStopUseCase: UpdateStopUseCase;

    constructor(updateStopUseCase: UpdateStopUseCase) {
        this.updateStopUseCase = updateStopUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { name, latitude, longitude } = request.body;

        const { id } = request.params;

        try {
            await this.updateStopUseCase.execute({
                id: Number(id),
                name,
                latitude,
                longitude,
            });

            return response.status(200).send();
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
