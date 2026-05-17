import { Request, Response } from 'express';
import { GetAllVehiclesPositionsUseCase } from './GetAllVehiclesPositionsUseCase';

export class GetAllVehiclesPositionsController {
    private getAllVehiclesPositionsUseCase: GetAllVehiclesPositionsUseCase;

    constructor(getAllVehiclesPositionsUseCase: GetAllVehiclesPositionsUseCase) {
        this.getAllVehiclesPositionsUseCase = getAllVehiclesPositionsUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const vehiclesPositions = await this.getAllVehiclesPositionsUseCase.execute();

            return response.status(200).json(vehiclesPositions);
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
