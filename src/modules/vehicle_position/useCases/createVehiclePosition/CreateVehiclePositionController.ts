import { Request, Response } from 'express';
import { CreateVehiclePositionUseCase } from './CreateVehiclePositionUseCase';

export class CreateVehiclePositionController {
    private createVehiclePositionUseCase: CreateVehiclePositionUseCase;

    constructor(createVehiclePositionUseCase: CreateVehiclePositionUseCase) {
        this.createVehiclePositionUseCase = createVehiclePositionUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { latitude, longitude, vehicle_id } = request.body;

        try {
            await this.createVehiclePositionUseCase.execute({
                latitude,
                longitude,
                vehicle_id,
            });

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
