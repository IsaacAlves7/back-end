import { Request, Response } from 'express';
import { UpdateLineUseCase } from './UpdateLineUseCase';

export class UpdateLineController {
    private updateLineUseCase: UpdateLineUseCase;

    constructor(updateLineUseCase: UpdateLineUseCase) {
        this.updateLineUseCase = updateLineUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const { id } = request.params;

        try {
            await this.updateLineUseCase.execute({
                id: Number(id),
                name,
            });

            return response.status(200).send();
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
