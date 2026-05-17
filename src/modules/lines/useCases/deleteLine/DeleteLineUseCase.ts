import { ILinesRepository } from '../../repositories/ILinesRepository';
import { IDeleteLineRequestDTO } from './DeleteLineRequestDTO';

export class DeleteLineUseCase {
    private linesRepository: ILinesRepository;

    constructor(linesRepository: ILinesRepository) {
        this.linesRepository = linesRepository;
    }

    async execute(data: IDeleteLineRequestDTO) {
        await this.linesRepository.delete(data.id);
    }
}
