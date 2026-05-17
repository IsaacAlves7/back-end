import { Request, Response } from 'express';
import { GetByIdVehiclePositionUseCase } from './GetByIdVehiclePositionUseCase';

export class GetByIdVehiclePositionController {
    private getByIdVehiclePositionUseCase: GetByIdVehiclePositionUseCase;

    constructor(getByIdVehiclePositionUseCase: GetByIdVehiclePositionUseCase) {
        this.getByIdVehiclePositionUseCase = getByIdVehiclePositionUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const vehiclePosition = await this.getByIdVehiclePositionUseCase.execute({
                id: Number(id),
            });

            return response.status(200).json(vehiclePosition[0]);
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
