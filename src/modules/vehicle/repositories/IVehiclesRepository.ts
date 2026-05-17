import { Vehicle } from '../../../_shared/entities/Vehicle';

export interface IVehiclesRepository {
    create(vehicle: Vehicle): Promise<void>;
    update(vehicle: Vehicle): Promise<void>;
    delete(id: number): Promise<void>;
    getById(id: number): Promise<Vehicle[]>;
    getAll(): Promise<Vehicle[]>;
    getByLine(line_id: number): Promise<Vehicle[]>;
}
