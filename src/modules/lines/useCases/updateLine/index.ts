import { PostgresLineRepository } from '../../repositories/implementations/PostgresLineRepository';
import { UpdateLineUseCase } from './UpdateLineUseCase';
import { UpdateLineController } from './UpdateLineController';

const postgresLinesRepository = new PostgresLineRepository();

const updateLineUseCase = new UpdateLineUseCase(postgresLinesRepository);

const updateLineController = new UpdateLineController(updateLineUseCase);

export { updateLineController, updateLineUseCase };
