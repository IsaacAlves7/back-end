import { PostgresVehicleRepository } from '../../repositories/implementations/PostgresVehicleRepository';
import { GetByIdVehicleUseCase } from './GetByIdVehicleUseCase';
import { GetByIdVehicleController } from './GetByIdVehicleController';

const postgresVehiclesRepository = new PostgresVehicleRepository();

const getByIdVehicleUseCase = new GetByIdVehicleUseCase(postgresVehiclesRepository);

const getByIdVehicleController = new GetByIdVehicleController(getByIdVehicleUseCase);

export { getByIdVehicleController, getByIdVehicleUseCase };
