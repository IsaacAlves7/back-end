import { Request, Response } from 'express';
import { GetLinesByStopUseCase } from './GetLinesByStopUseCase';

export class GetLinesByStopController {
    private getLinesByStopUseCase: GetLinesByStopUseCase;

    constructor(getLinesByStopUseCase: GetLinesByStopUseCase) {
        this.getLinesByStopUseCase = getLinesByStopUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { stop_id } = request.params;

        try {
            const linesByStop = await this.getLinesByStopUseCase.execute({
                stop_id: Number(stop_id),
            });

            return response.status(200).json(linesByStop);
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
