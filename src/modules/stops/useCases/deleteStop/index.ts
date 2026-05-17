import { PostgresStopRepository } from '../../repositories/implementations/PostgresStopRepository';
import { DeleteStopUseCase } from './DeleteStopUseCase';
import { DeleteStopController } from './DeleteStopController';

const postgresStopsRepository = new PostgresStopRepository();

const deleteStopUseCase = new DeleteStopUseCase(postgresStopsRepository);

const deleteStopController = new DeleteStopController(deleteStopUseCase);

export { deleteStopController, deleteStopUseCase };
