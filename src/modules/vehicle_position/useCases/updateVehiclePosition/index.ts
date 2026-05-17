import { PostgresVehiclePositionRepository } from '../../repositories/implementations/PostgresVehiclePositionRepository';
import { UpdateVehiclePositionUseCase } from './UpdateVehiclePositionUseCase';
import { UpdateVehiclePositionController } from './UpdateVehiclePositionController';

const postgresVehiclePositionsRepository = new PostgresVehiclePositionRepository();

const updateVehiclePositionUseCase = new UpdateVehiclePositionUseCase(postgresVehiclePositionsRepository);

const updateVehiclePositionController = new UpdateVehiclePositionController(updateVehiclePositionUseCase);

export { updateVehiclePositionController, updateVehiclePositionUseCase };
