import { PostgresVehicleRepository } from '../../repositories/implementations/PostgresVehicleRepository';
import { CreateVehicleUseCase } from './CreateVehicleUseCase';
import { CreateVehicleController } from './CreateVehicleController';

const postgresVehiclesRepository = new PostgresVehicleRepository();

const createVehicleUseCase = new CreateVehicleUseCase(postgresVehiclesRepository);

const createVehicleController = new CreateVehicleController(createVehicleUseCase);

export { createVehicleController, createVehicleUseCase };
