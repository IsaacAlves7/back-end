import { IVehiclesRepository } from '../../repositories/IVehiclesRepository';
import { ICreateVehicleRequestDTO } from './CreateVehicleRequestDTO';
import { Vehicle } from '../../../../_shared/entities/Vehicle';

export class CreateVehicleUseCase {
    private vehiclesRepository: IVehiclesRepository;

    constructor(vehiclesRepository: IVehiclesRepository) {
        this.vehiclesRepository = vehiclesRepository;
    }

    async execute(data: ICreateVehicleRequestDTO) {
        const vehicle = new Vehicle(data);

        await this.vehiclesRepository.create(vehicle);
    }
}
