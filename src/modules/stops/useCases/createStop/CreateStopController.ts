import { Request, Response } from 'express';
import { CreateStopUseCase } from './CreateStopUseCase';

export class CreateStopController {
    private createStopUseCase: CreateStopUseCase;

    constructor(createStopUseCase: CreateStopUseCase) {
        this.createStopUseCase = createStopUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { name, latitude, longitude } = request.body;

        try {
            await this.createStopUseCase.execute({
                name,
                latitude,
                longitude,
            });

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
