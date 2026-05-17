import { IVehiclesPositionsRepository } from '../../repositories/IVehiclesPositionsRepository';

export class GetAllVehiclesPositionsUseCase {
    private vehiclesPositionsRepository: IVehiclesPositionsRepository;

    constructor(vehiclesPositionsRepository: IVehiclesPositionsRepository) {
        this.vehiclesPositionsRepository = vehiclesPositionsRepository;
    }

    async execute() {
        return await this.vehiclesPositionsRepository.getAll();
    }
}
