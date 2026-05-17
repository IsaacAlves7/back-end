import { IVehiclesRepository } from '../../repositories/IVehiclesRepository';

export class GetAllVehiclesUseCase {
    private vehiclesRepository: IVehiclesRepository;

    constructor(vehiclesRepository: IVehiclesRepository) {
        this.vehiclesRepository = vehiclesRepository;
    }

    async execute() {
        return await this.vehiclesRepository.getAll();
    }
}
