import { ILinesRepository } from '../../repositories/ILinesRepository';
import { ICreateLineRequestDTO } from './CreateLineRequestDTO';
import { Line } from '../../../../_shared/entities/Line';

export class CreateLineUseCase {
    private linesRepository: ILinesRepository;

    constructor(linesRepository: ILinesRepository) {
        this.linesRepository = linesRepository;
    }

    async execute(data: ICreateLineRequestDTO) {
        const line = new Line(data);

        await this.linesRepository.create(line);
    }
}
