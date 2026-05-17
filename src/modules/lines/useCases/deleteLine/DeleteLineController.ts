import { Request, Response } from 'express';
import { DeleteLineUseCase } from './DeleteLineUseCase';

export class DeleteLineController {
    private deleteLineUseCase: DeleteLineUseCase;

    constructor(deleteLineUseCase: DeleteLineUseCase) {
        this.deleteLineUseCase = deleteLineUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deleteLineUseCase.execute({
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
