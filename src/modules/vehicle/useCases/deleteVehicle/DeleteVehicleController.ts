import { Request, Response } from 'express';
import { DeleteVehicleUseCase } from './DeleteVehicleUseCase';

export class DeleteVehicleController {
    private deleteVehicleUseCase: DeleteVehicleUseCase;

    constructor(deleteVehicleUseCase: DeleteVehicleUseCase) {
        this.deleteVehicleUseCase = deleteVehicleUseCase;
    }
    async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deleteVehicleUseCase.execute({
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
