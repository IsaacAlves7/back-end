import { Request, Response } from 'express';
import { CreateVehicleUseCase } from './CreateVehicleUseCase';

export class CreateVehicleController {
    private createVehicleUseCase: CreateVehicleUseCase;

    constructor(createVehicleUseCase: CreateVehicleUseCase) {
        this.createVehicleUseCase = createVehicleUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { name, model, line_id } = request.body;

        try {
            await this.createVehicleUseCase.execute({
                name,
                model,
                line_id,
            });

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
