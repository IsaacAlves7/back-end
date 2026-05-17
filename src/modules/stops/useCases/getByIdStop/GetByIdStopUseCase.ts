import { IStopsRepository } from '../../repositories/IStopsRepository';
import { IGetByIdStopRequestDTO } from './GetByIdStopRequestDTO';

export class GetByIdStopUseCase {
    private stopsRepository: IStopsRepository;

    constructor(stopsRepository: IStopsRepository) {
        this.stopsRepository = stopsRepository;
    }

    async execute(data: IGetByIdStopRequestDTO) {
        return await this.stopsRepository.getById(data.id);
    }
}
