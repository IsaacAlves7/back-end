import { PostgresLineRepository } from '../../repositories/implementations/PostgresLineRepository';
import { CreateLineUseCase } from './CreateLineUseCase';
import { CreateLineController } from './CreateLineController';

const postgresLinesRepository = new PostgresLineRepository();

const createLineUseCase = new CreateLineUseCase(postgresLinesRepository);

const createLineController = new CreateLineController(createLineUseCase);

export { createLineController, createLineUseCase };
