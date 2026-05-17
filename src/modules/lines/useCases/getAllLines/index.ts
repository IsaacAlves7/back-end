import { PostgresLineRepository } from '../../repositories/implementations/PostgresLineRepository';
import { GetAllLinesUseCase } from './GetAllLinesUseCase';
import { GetAllLinesController } from './GetAllLinesController';

const postgresLinesRepository = new PostgresLineRepository();

const getAllLineUseCase = new GetAllLinesUseCase(postgresLinesRepository);

const getAllLineController = new GetAllLinesController(getAllLineUseCase);

export { getAllLineController, getAllLineUseCase };
