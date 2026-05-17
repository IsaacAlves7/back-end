import { PostgresLineRepository } from '../../repositories/implementations/PostgresLineRepository';
import { DeleteLineUseCase } from './DeleteLineUseCase';
import { DeleteLineController } from './DeleteLineController';

const postgresLinesRepository = new PostgresLineRepository();

const deleteLineUseCase = new DeleteLineUseCase(postgresLinesRepository);

const deleteLineController = new DeleteLineController(deleteLineUseCase);

export { deleteLineController, deleteLineUseCase };
