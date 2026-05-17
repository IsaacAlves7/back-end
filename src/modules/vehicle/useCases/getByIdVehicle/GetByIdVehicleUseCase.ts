import { IVehiclesRepository } from '../../repositories/IVehiclesRepository';
import { IGetByIdVehicleRequestDTO } from './GetByIdVehicleRequestDTO';

export class GetByIdVehicleUseCase {
    private vehiclesRepository: IVehiclesRepository;

    constructor(vehiclesRepository: IVehiclesRepository) {
        this.vehiclesRepository = vehiclesRepository;
    }

    async execute(data: IGetByIdVehicleRequestDTO) {
        return await this.vehiclesRepository.getById(data.id);
    }
}
