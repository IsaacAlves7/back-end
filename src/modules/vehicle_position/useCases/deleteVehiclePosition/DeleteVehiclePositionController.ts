import { Request, Response } from 'express';
import { DeleteVehiclePositionUseCase } from './DeleteVehiclePositionUseCase';

export class DeleteVehiclePositionController {
    private deleteVehiclePositionUseCase: DeleteVehiclePositionUseCase;

    constructor(deleteVehiclePositionUseCase: DeleteVehiclePositionUseCase) {
        this.deleteVehiclePositionUseCase = deleteVehiclePositionUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deleteVehiclePositionUseCase.execute({
                id: Number(id),
            });

            return response.status(200).send();
        } catch (err) {
            return response.status(400).json({
                message: 'Unexpected error.',
            });
        }
    }
}
