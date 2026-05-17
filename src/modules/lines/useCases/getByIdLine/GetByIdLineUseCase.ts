import { ILinesRepository } from '../../repositories/ILinesRepository';
import { IGetByIdLineRequestDTO } from './GetByIdLineRequestDTO';

export class GetByIdLineUseCase {
    private linesRepository: ILinesRepository;

    constructor(linesRepository: ILinesRepository) {
        this.linesRepository = linesRepository;
    }

    async execute(data: IGetByIdLineRequestDTO) {
        return await this.linesRepository.getById(data.id);
    }
}
