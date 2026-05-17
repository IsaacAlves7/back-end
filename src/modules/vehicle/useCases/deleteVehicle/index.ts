import { PostgresVehicleRepository } from '../../repositories/implementations/PostgresVehicleRepository';
import { DeleteVehicleUseCase } from './DeleteVehicleUseCase';
import { DeleteVehicleController } from './DeleteVehicleController';

const postgresVehiclesRepository = new PostgresVehicleRepository();

const deleteVehicleUseCase = new DeleteVehicleUseCase(postgresVehiclesRepository);

const deleteVehicleController = new DeleteVehicleController(deleteVehicleUseCase);

export { deleteVehicleController, deleteVehicleUseCase };
