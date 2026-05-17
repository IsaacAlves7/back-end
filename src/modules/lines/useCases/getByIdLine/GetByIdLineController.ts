import { Request, Response } from 'express';
import { GetByIdLineUseCase } from './GetByIdLineUseCase';

export class GetByIdLineController {
    private getByIdLineUseCase: GetByIdLineUseCase;

    constructor(getByIdLineUseCase: GetByIdLineUseCase) {
        this.getByIdLineUseCase = getByIdLineUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const line = await this.getByIdLineUseCase.execute({
                id: Number(id),
            });

            return response.status(200).json(line[0]);
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
