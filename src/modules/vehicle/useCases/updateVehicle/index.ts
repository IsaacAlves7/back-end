import { PostgresVehicleRepository } from '../../repositories/implementations/PostgresVehicleRepository';
import { UpdateVehicleUseCase } from './UpdateVehicleUseCase';
import { UpdateVehicleController } from './UpdateVehicleController';

const postgresVehiclesRepository = new PostgresVehicleRepository();

const updateVehicleUseCase = new UpdateVehicleUseCase(postgresVehiclesRepository);

const updateVehicleController = new UpdateVehicleController(updateVehicleUseCase);

export { updateVehicleController, updateVehicleUseCase };
