import { Request, Response } from 'express';
import { UpdateVehicleUseCase } from './UpdateVehicleUseCase';

export class UpdateVehicleController {
    private updateVehicleUseCase: UpdateVehicleUseCase;

    constructor(updateVehicleUseCase: UpdateVehicleUseCase) {
        this.updateVehicleUseCase = updateVehicleUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { name, model } = request.body;

        const { id } = request.params;

        try {
            await this.updateVehicleUseCase.execute({
                id: Number(id),
                name,
                model,
            });

            return response.status(200).send();
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
