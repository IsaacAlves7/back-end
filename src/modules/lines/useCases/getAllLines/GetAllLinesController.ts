import { Request, Response } from 'express';
import { GetAllLinesUseCase } from './GetAllLinesUseCase';

export class GetAllLinesController {
    private getAllLinesUseCase: GetAllLinesUseCase;

    constructor(getAllLinesUseCase: GetAllLinesUseCase) {
        this.getAllLinesUseCase = getAllLinesUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const lines = await this.getAllLinesUseCase.execute();

            return response.status(200).json(lines);
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
