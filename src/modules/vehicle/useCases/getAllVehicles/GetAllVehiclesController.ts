import { Request, Response } from 'express';
import { GetAllVehiclesUseCase } from './GetAllVehiclesUseCase';

export class GetAllVehiclesController {
    private getAllVehiclesUseCase: GetAllVehiclesUseCase;

    constructor(getAllVehiclesUseCase: GetAllVehiclesUseCase) {
        this.getAllVehiclesUseCase = getAllVehiclesUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const vehicles = await this.getAllVehiclesUseCase.execute();

            return response.status(200).json(vehicles);
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
