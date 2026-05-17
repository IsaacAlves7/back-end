import { IVehiclesPositionsRepository } from '../IVehiclesPositionsRepository';
import database from '../../../../_shared/infra/database/knex/connection';
import { VehiclePosition } from '../../../../_shared/entities/VehiclePosition';

export class PostgresVehiclePositionRepository implements IVehiclesPositionsRepository {
    async create(vehicle_position: VehiclePosition): Promise<void> {
        await database('vehicle_position').insert(vehicle_position);
    }
    async update(vehicle_position: VehiclePosition): Promise<void> {
        await database('vehicle_position').where('id', vehicle_position.id).update({
            latitude: vehicle_position.latitude,
            longitude: vehicle_position.longitude,
        });
    }
    async delete(id: number): Promise<void> {
        await database('vehicle_position').where('id', id).del();
    }
    async getById(id: number): Promise<VehiclePosition[]> {
        return await database<VehiclePosition>('vehicle_position').where('id', id);
    }
    async getAll(): Promise<VehiclePosition[]> {
        return await database<VehiclePosition>('vehicle_position');
    }
}
