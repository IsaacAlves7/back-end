import { PostgresVehiclePositionRepository } from '../../repositories/implementations/PostgresVehiclePositionRepository';
import { CreateVehiclePositionUseCase } from './CreateVehiclePositionUseCase';
import { CreateVehiclePositionController } from './CreateVehiclePositionController';

const postgresVehiclePositionsRepository = new PostgresVehiclePositionRepository();

const createVehiclePositionUseCase = new CreateVehiclePositionUseCase(postgresVehiclePositionsRepository);

const createVehiclePositionController = new CreateVehiclePositionController(createVehiclePositionUseCase);

export { createVehiclePositionController, createVehiclePositionUseCase };
