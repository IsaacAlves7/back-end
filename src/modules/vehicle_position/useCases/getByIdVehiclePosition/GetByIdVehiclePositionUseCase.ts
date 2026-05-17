import { IVehiclesPositionsRepository } from '../../repositories/IVehiclesPositionsRepository';
import { IGetByIdVehiclePositionRequestDTO } from './GetByIdVehiclePositionRequestDTO';

export class GetByIdVehiclePositionUseCase {
    private vehiclesPositionsRepository: IVehiclesPositionsRepository;

    constructor(vehiclesPositionsRepository: IVehiclesPositionsRepository) {
        this.vehiclesPositionsRepository = vehiclesPositionsRepository;
    }

    async execute(data: IGetByIdVehiclePositionRequestDTO) {
        return await this.vehiclesPositionsRepository.getById(data.id);
    }
}
