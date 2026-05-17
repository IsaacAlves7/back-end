import { ILinesRepository } from '../../repositories/ILinesRepository';

export class GetAllLinesUseCase {
    private linesRepository: ILinesRepository;

    constructor(linesRepository: ILinesRepository) {
        this.linesRepository = linesRepository;
    }

    async execute() {
        return await this.linesRepository.getAll();
    }
}
