import { Request, Response } from 'express';
import { GetByIdStopUseCase } from './GetByIdStopUseCase';

export class GetByIdStopController {
    private getByIdStopUseCase: GetByIdStopUseCase;

    constructor(getByIdStopUseCase: GetByIdStopUseCase) {
        this.getByIdStopUseCase = getByIdStopUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const stop = await this.getByIdStopUseCase.execute({
                id: Number(id),
            });

            return response.status(200).json(stop[0]);
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
