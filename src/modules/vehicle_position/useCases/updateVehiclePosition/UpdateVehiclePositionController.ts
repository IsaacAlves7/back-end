import { Request, Response } from 'express';
import { UpdateVehiclePositionUseCase } from './UpdateVehiclePositionUseCase';

export class UpdateVehiclePositionController {
    private updateVehiclePositionUseCase: UpdateVehiclePositionUseCase;

    constructor(updateVehiclePositionUseCase: UpdateVehiclePositionUseCase) {
        this.updateVehiclePositionUseCase = updateVehiclePositionUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { latitude, longitude } = request.body;

        const { id } = request.params;

        try {
            await this.updateVehiclePositionUseCase.execute({
                id: Number(id),
                latitude,
                longitude,
            });

            return response.status(200).send();
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
