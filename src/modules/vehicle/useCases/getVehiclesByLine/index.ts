import { PostgresVehicleRepository } from '../../repositories/implementations/PostgresVehicleRepository';
import { GetVehiclesByLineUseCase } from './GetVehiclesByLineUseCase';
import { GetVehiclesByLineController } from './GetVehiclesByLineController';

const postgresVehiclesRepository = new PostgresVehicleRepository();

const getVehiclesByLineUseCase = new GetVehiclesByLineUseCase(postgresVehiclesRepository);

const getVehiclesByLineController = new GetVehiclesByLineController(getVehiclesByLineUseCase);

export { getVehiclesByLineController, getVehiclesByLineUseCase };
