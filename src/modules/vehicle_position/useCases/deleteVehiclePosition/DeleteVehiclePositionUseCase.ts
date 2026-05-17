import { IVehiclesPositionsRepository } from '../../repositories/IVehiclesPositionsRepository';
import { IDeleteVehiclePositionRequestDTO } from './DeleteVehiclePositionRequestDTO';

export class DeleteVehiclePositionUseCase {
    private vehiclePositionsRepository: IVehiclesPositionsRepository;

    constructor(vehiclePositionsRepository: IVehiclesPositionsRepository) {
        this.vehiclePositionsRepository = vehiclePositionsRepository;
    }

    async execute(data: IDeleteVehiclePositionRequestDTO) {
        await this.vehiclePositionsRepository.delete(data.id);
    }
}
