import { IVehiclesRepository } from '../../repositories/IVehiclesRepository';
import { IGetVehiclesByLineRequestDTO } from './GetVehicleByLineRequestDTO';

export class GetVehiclesByLineUseCase {
    private vehiclesRepository: IVehiclesRepository;

    constructor(vehiclesRepository: IVehiclesRepository) {
        this.vehiclesRepository = vehiclesRepository;
    }

    async execute(data: IGetVehiclesByLineRequestDTO) {
        return await this.vehiclesRepository.getByLine(data.line_id);
    }
}
