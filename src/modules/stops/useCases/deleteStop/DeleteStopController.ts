import { Request, Response } from 'express';
import { DeleteStopUseCase } from './DeleteStopUseCase';

export class DeleteStopController {
    private deleteStopUseCase: DeleteStopUseCase;

    constructor(deleteStopUseCase: DeleteStopUseCase) {
        this.deleteStopUseCase = deleteStopUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deleteStopUseCase.execute({
                id: Number(id),
            });

            return response.status(200).send();
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
