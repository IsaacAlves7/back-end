import { PostgresLineRepository } from '../../repositories/implementations/PostgresLineRepository';
import { GetLinesByStopUseCase } from './GetLinesByStopUseCase';
import { GetLinesByStopController } from './GetLinesByStopController';

const postgresLinesRepository = new PostgresLineRepository();

const getLinesByStopUseCase = new GetLinesByStopUseCase(postgresLinesRepository);

const getLinesByStopController = new GetLinesByStopController(getLinesByStopUseCase);

export { getLinesByStopController, getLinesByStopUseCase };
