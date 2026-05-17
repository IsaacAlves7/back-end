import { IVehiclesPositionsRepository } from '../../repositories/IVehiclesPositionsRepository';
import { IUpdateVehiclePositionRequestDTO } from './UpdateVehiclePositionRequestDTO';
import { VehiclePosition } from '../../../../_shared/entities/VehiclePosition';

export class UpdateVehiclePositionUseCase {
    private vehiclesPositionsRepository: IVehiclesPositionsRepository;

    constructor(vehiclesPositionsRepository: IVehiclesPositionsRepository) {
        this.vehiclesPositionsRepository = vehiclesPositionsRepository;
    }

    async execute(data: IUpdateVehiclePositionRequestDTO) {
        const vehiclePosition = new VehiclePosition(data, data.id);
        await this.vehiclesPositionsRepository.update(vehiclePosition);
    }
}
