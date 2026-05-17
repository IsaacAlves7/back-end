import { IStopsRepository } from '../../repositories/IStopsRepository';
import { IDeleteStopRequestDTO } from './DeleteStopRequestDTO';

export class DeleteStopUseCase {
    private stopsRepository: IStopsRepository;

    constructor(stopsRepository: IStopsRepository) {
        this.stopsRepository = stopsRepository;
    }

    async execute(data: IDeleteStopRequestDTO) {
        await this.stopsRepository.delete(data.id);
    }
}
