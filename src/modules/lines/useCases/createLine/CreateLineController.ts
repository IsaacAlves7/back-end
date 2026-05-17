import { Request, Response } from 'express';
import { CreateLineUseCase } from './CreateLineUseCase';

export class CreateLineController {
    private createLineUseCase: CreateLineUseCase;

    constructor(createLineUseCase: CreateLineUseCase) {
        this.createLineUseCase = createLineUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { name, stop_id } = request.body;

        try {
            await this.createLineUseCase.execute({
                name,
                stop_id,
            });

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
