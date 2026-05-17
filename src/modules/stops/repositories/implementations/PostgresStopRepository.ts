import { IStopsRepository } from '../IStopsRepository';
import database from '../../../../_shared/infra/database/knex/connection';
import { Stop } from '../../../../_shared/entities/Stop';

export class PostgresStopRepository implements IStopsRepository {
    async create(stop: Stop): Promise<void> {
        await database('stops').insert(stop);
    }
    async update(stop: Stop): Promise<void> {
        await database('stops').where('id', stop.id).update({
            name: stop.name,
            latitude: stop.latitude,
            longitude: stop.longitude,
        });
    }
    async delete(id: number): Promise<void> {
        await database('stops').where('id', id).del();
    }
    async getById(id: number): Promise<Stop[]> {
        return await database<Stop>('stops').where('id', id);
    }
    async getAll(): Promise<Stop[]> {
        return await database<Stop>('stops');
    }
    async getByPosition(stop: Stop): Promise<Stop[]> {
        const { latitude, longitude, latitudeRange, longitudeRange } = stop;

        const stopsByPosition = await database<Stop>('stops')
            .whereIn('latitude', [latitude, latitudeRange as number])
            .whereIn('longitude', [longitudeRange as number, longitude]);

        return stopsByPosition;
    }
}
