import { IStopsRepository } from '../../repositories/IStopsRepository';

export class GetAllStopsUseCase {
    private stopsRepository: IStopsRepository;

    constructor(stopsRepository: IStopsRepository) {
        this.stopsRepository = stopsRepository;
    }

    async execute() {
        return await this.stopsRepository.getAll();
    }
}
