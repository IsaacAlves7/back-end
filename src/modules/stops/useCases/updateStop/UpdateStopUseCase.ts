import { IStopsRepository } from '../../repositories/IStopsRepository';
import { IUpdateStopRequestDTO } from './UpdateStopRequestDTO';
import { Stop } from '../../../../_shared/entities/Stop';

export class UpdateStopUseCase {
    private stopsRepository: IStopsRepository;

    constructor(stopsRepository: IStopsRepository) {
        this.stopsRepository = stopsRepository;
    }

    async execute(data: IUpdateStopRequestDTO) {
        const stop = new Stop(data, data.id);
        await this.stopsRepository.update(stop);
    }
}
