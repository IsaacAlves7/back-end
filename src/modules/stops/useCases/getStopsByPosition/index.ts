import { PostgresStopRepository } from '../../repositories/implementations/PostgresStopRepository';
import { GetStopsByPositionUseCase } from './GetStopsByPositionUseCase';
import { GetStopsByPositionController } from './GetStopsByPositionController';

const postgresStopsRepository = new PostgresStopRepository();

const getStopsByPositionUseCase = new GetStopsByPositionUseCase(postgresStopsRepository);

const getStopsByPositionController = new GetStopsByPositionController(getStopsByPositionUseCase);

export { getStopsByPositionController, getStopsByPositionUseCase };
