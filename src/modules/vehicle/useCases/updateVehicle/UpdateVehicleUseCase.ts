import { IVehiclesRepository } from '../../repositories/IVehiclesRepository';
import { IUpdateVehicleRequestDTO } from './UpdateVehicleRequestDTO';
import { Vehicle } from '../../../../_shared/entities/Vehicle';

export class UpdateVehicleUseCase {
    private vehiclesRepository: IVehiclesRepository;

    constructor(vehiclesRepository: IVehiclesRepository) {
        this.vehiclesRepository = vehiclesRepository;
    }

    async execute(data: IUpdateVehicleRequestDTO) {
        const vehicle = new Vehicle(data, data.id);
        await this.vehiclesRepository.update(vehicle);
    }
}
