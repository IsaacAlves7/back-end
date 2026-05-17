import { PostgresVehicleRepository } from '../../repositories/implementations/PostgresVehicleRepository';
import { GetAllVehiclesUseCase } from './GetAllVehiclesUseCase';
import { GetAllVehiclesController } from './GetAllVehiclesController';

const postgresVehiclesRepository = new PostgresVehicleRepository();

const getAllVehicleUseCase = new GetAllVehiclesUseCase(postgresVehiclesRepository);

const getAllVehicleController = new GetAllVehiclesController(getAllVehicleUseCase);

export { getAllVehicleController, getAllVehicleUseCase };
