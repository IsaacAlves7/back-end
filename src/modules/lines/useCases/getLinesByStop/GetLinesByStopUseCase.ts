import { ILinesRepository } from '../../repositories/ILinesRepository';
import { IGetLinesByStopRequestDTO } from './GetLinesByStopRequestDTO';

export class GetLinesByStopUseCase {
    private linesRepository: ILinesRepository;

    constructor(linesRepository: ILinesRepository) {
        this.linesRepository = linesRepository;
    }

    async execute(data: IGetLinesByStopRequestDTO) {
        return await this.linesRepository.getByStop(data.stop_id);
    }
}
