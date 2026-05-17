import { PostgresVehiclePositionRepository } from '../../repositories/implementations/PostgresVehiclePositionRepository';
import { GetAllVehiclesPositionsUseCase } from './GetAllVehiclesPositionsUseCase';
import { GetAllVehiclesPositionsController } from './GetAllVehiclesPositionsController';

const postgresVehiclePositionRepository = new PostgresVehiclePositionRepository();

const getAllVehiclesPositionsUseCase = new GetAllVehiclesPositionsUseCase(postgresVehiclePositionRepository);

const getAllVehiclesPositionsController = new GetAllVehiclesPositionsController(getAllVehiclesPositionsUseCase);

export { getAllVehiclesPositionsController, getAllVehiclesPositionsUseCase };
