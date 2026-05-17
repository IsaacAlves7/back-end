import { PostgresStopRepository } from '../../repositories/implementations/PostgresStopRepository';
import { GetByIdStopUseCase } from './GetByIdStopUseCase';
import { GetByIdStopController } from './GetByIdStopController';

const postgresStopsRepository = new PostgresStopRepository();

const getByIdStopUseCase = new GetByIdStopUseCase(postgresStopsRepository);

const getByIdStopController = new GetByIdStopController(getByIdStopUseCase);

export { getByIdStopController, getByIdStopUseCase };
