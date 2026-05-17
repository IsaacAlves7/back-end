import { PostgresStopRepository } from '../../repositories/implementations/PostgresStopRepository';
import { CreateStopUseCase } from './CreateStopUseCase';
import { CreateStopController } from './CreateStopController';

const postgresStopsRepository = new PostgresStopRepository();

const createStopUseCase = new CreateStopUseCase(postgresStopsRepository);

const createStopController = new CreateStopController(createStopUseCase);

export { createStopController, createStopUseCase };
