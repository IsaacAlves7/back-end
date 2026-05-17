import { PostgresVehiclePositionRepository } from '../../repositories/implementations/PostgresVehiclePositionRepository';
import { GetByIdVehiclePositionUseCase } from './GetByIdVehiclePositionUseCase';
import { GetByIdVehiclePositionController } from './GetByIdVehiclePositionController';

const postgresVehiclePositionsRepository = new PostgresVehiclePositionRepository();

const getByIdVehiclePositionUseCase = new GetByIdVehiclePositionUseCase(postgresVehiclePositionsRepository);

const getByIdVehiclePositionController = new GetByIdVehiclePositionController(getByIdVehiclePositionUseCase);

export { getByIdVehiclePositionController, getByIdVehiclePositionUseCase };
