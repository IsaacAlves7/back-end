import { PostgresVehiclePositionRepository } from '../../repositories/implementations/PostgresVehiclePositionRepository';
import { DeleteVehiclePositionUseCase } from './DeleteVehiclePositionUseCase';
import { DeleteVehiclePositionController } from './DeleteVehiclePositionController';

const postgresVehiclePositionsRepository = new PostgresVehiclePositionRepository();

const deleteVehiclePositionUseCase = new DeleteVehiclePositionUseCase(postgresVehiclePositionsRepository);

const deleteVehiclePositionController = new DeleteVehiclePositionController(deleteVehiclePositionUseCase);

export { deleteVehiclePositionController, deleteVehiclePositionUseCase };
