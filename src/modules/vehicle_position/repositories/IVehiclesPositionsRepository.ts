import { VehiclePosition } from '../../../_shared/entities/VehiclePosition';

export interface IVehiclesPositionsRepository {
    create(vehicle_position: VehiclePosition): Promise<void>;
    update(vehicle_position: VehiclePosition): Promise<void>;
    delete(id: number): Promise<void>;
    getById(id: number): Promise<VehiclePosition[]>;
    getAll(): Promise<VehiclePosition[]>;
}
