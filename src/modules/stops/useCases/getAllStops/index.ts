import { PostgresStopRepository } from '../../repositories/implementations/PostgresStopRepository';
import { GetAllStopsUseCase } from './GetAllStopsUseCase';
import { GetAllStopsController } from './GetAllStopsController';

const postgresStopsRepository = new PostgresStopRepository();

const getAllStopUseCase = new GetAllStopsUseCase(postgresStopsRepository);

const getAllStopController = new GetAllStopsController(getAllStopUseCase);

export { getAllStopController, getAllStopUseCase };
