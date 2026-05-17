import { IVehiclesPositionsRepository } from '../../repositories/IVehiclesPositionsRepository';
import { ICreateVehiclePositionRequestDTO } from './CreateVehiclePositionRequestDTO';
import { VehiclePosition } from '../../../../_shared/entities/VehiclePosition';

export class CreateVehiclePositionUseCase {
    private vehiclesPositionsRepository: IVehiclesPositionsRepository;

    constructor(vehiclesPositionsRepository: IVehiclesPositionsRepository) {
        this.vehiclesPositionsRepository = vehiclesPositionsRepository;
    }

    async execute(data: ICreateVehiclePositionRequestDTO) {
        const vehiclePosition = new VehiclePosition(data);
        await this.vehiclesPositionsRepository.create(vehiclePosition);
    }
}
