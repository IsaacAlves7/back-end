import { PostgresStopRepository } from '../../repositories/implementations/PostgresStopRepository';
import { UpdateStopUseCase } from './UpdateStopUseCase';
import { UpdateStopController } from './UpdateStopController';

const postgresStopsRepository = new PostgresStopRepository();

const updateStopUseCase = new UpdateStopUseCase(postgresStopsRepository);

const updateStopController = new UpdateStopController(updateStopUseCase);

export { updateStopController, updateStopUseCase };
