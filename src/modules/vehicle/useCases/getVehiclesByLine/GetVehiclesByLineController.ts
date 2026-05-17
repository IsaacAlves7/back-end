import { Request, Response } from 'express';
import { GetVehiclesByLineUseCase } from './GetVehiclesByLineUseCase';

export class GetVehiclesByLineController {
    private getVehiclesByLineUseCase: GetVehiclesByLineUseCase;

    constructor(getVehiclesByLineUseCase: GetVehiclesByLineUseCase) {
        this.getVehiclesByLineUseCase = getVehiclesByLineUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { line_id } = request.params;

        try {
            const vehiclesByLine = await this.getVehiclesByLineUseCase.execute({
                line_id: Number(line_id),
            });

            return response.status(200).json(vehiclesByLine);
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
