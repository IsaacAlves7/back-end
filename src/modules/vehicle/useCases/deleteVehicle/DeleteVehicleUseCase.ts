import { IVehiclesRepository } from '../../repositories/IVehiclesRepository';
import { IDeleteVehicleRequestDTO } from './DeleteVehicleRequestDTO';

export class DeleteVehicleUseCase {
    private vehiclesRepository: IVehiclesRepository;

    constructor(vehiclesRepository: IVehiclesRepository) {
        this.vehiclesRepository = vehiclesRepository;
    }

    async execute(data: IDeleteVehicleRequestDTO) {
        await this.vehiclesRepository.delete(data.id);
    }
}
