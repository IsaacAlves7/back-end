import { ILinesRepository } from '../../repositories/ILinesRepository';
import { IUpdateLineRequestDTO } from './UpdateLineRequestDTO';
import { Line } from '../../../../_shared/entities/Line';

export class UpdateLineUseCase {
    private linesRepository: ILinesRepository;

    constructor(linesRepository: ILinesRepository) {
        this.linesRepository = linesRepository;
    }

    async execute(data: IUpdateLineRequestDTO) {
        const line = new Line(data, data.id);
        await this.linesRepository.update(line);
    }
}
