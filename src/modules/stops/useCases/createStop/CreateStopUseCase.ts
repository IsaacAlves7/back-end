import { IStopsRepository } from '../../repositories/IStopsRepository';
import { ICreateStopRequestDTO } from './CreateStopRequestDTO';
import { Stop } from '../../../../_shared/entities/Stop';

export class CreateStopUseCase {
    private stopsRepository: IStopsRepository;

    constructor(stopsRepository: IStopsRepository) {
        this.stopsRepository = stopsRepository;
    }

    async execute(data: ICreateStopRequestDTO) {
        const stop = new Stop(data);

        await this.stopsRepository.create(stop);
    }
}
