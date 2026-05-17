import { Request, Response } from 'express';
import { GetByIdVehicleUseCase } from './GetByIdVehicleUseCase';

export class GetByIdVehicleController {
    private getByIdVehicleUseCase: GetByIdVehicleUseCase;

    constructor(getByIdVehicleUseCase: GetByIdVehicleUseCase) {
        this.getByIdVehicleUseCase = getByIdVehicleUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const vehicle = await this.getByIdVehicleUseCase.execute({
                id: Number(id),
            });

            return response.status(200).json(vehicle[0]);
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
