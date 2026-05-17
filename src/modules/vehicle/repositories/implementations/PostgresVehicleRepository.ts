import { IVehiclesRepository } from '../IVehiclesRepository';
import database from '../../../../_shared/infra/database/knex/connection';
import { Vehicle } from '../../../../_shared/entities/Vehicle';

export class PostgresVehicleRepository implements IVehiclesRepository {
    async create(vehicle: Vehicle): Promise<void> {
        await database('vehicles').insert(vehicle);
    }
    async update(vehicle: Vehicle): Promise<void> {
        await database('vehicles').where('id', vehicle.id).update({
            name: vehicle.name,
        });
    }
    async delete(id: number): Promise<void> {
        await database('vehicles').where('id', id).del();
    }
    async getById(id: number): Promise<Vehicle[]> {
        return await database<Vehicle>('vehicles').where('id', id);
    }
    async getAll(): Promise<Vehicle[]> {
        return await database<Vehicle>('vehicles');
    }
    async getByLine(line_id: number): Promise<Vehicle[]> {
        return await database('vehicles').where('line_id', line_id);
    }
}
