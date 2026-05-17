import { PostgresLineRepository } from '../../repositories/implementations/PostgresLineRepository';
import { GetByIdLineUseCase } from './GetByIdLineUseCase';
import { GetByIdLineController } from './GetByIdLineController';

const postgresLinesRepository = new PostgresLineRepository();

const getByIdLineUseCase = new GetByIdLineUseCase(postgresLinesRepository);

const getByIdLineController = new GetByIdLineController(getByIdLineUseCase);

export { getByIdLineController, getByIdLineUseCase };
