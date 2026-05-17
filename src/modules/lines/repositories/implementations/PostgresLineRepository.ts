import { ILinesRepository } from '../ILinesRepository';
import database from '../../../../_shared/infra/database/knex/connection';
import { Line } from '../../../../_shared/entities/Line';

export class PostgresLineRepository implements ILinesRepository {
    async create(line: Line): Promise<void> {
        await database('lines').insert(line);
    }
    async update(line: Line): Promise<void> {
        await database('lines').where('id', line.id).update({
            name: line.name,
        });
    }
    async delete(id: number): Promise<void> {
        await database('lines').where('id', id).del();
    }
    async getById(id: number): Promise<Line[]> {
        return await database<Line>('lines').where('id', id);
    }
    async getAll(): Promise<Line[]> {
        return await database<Line>('lines');
    }
    async getByStop(stop_id: number): Promise<Line[]> {
        return await database('lines').where('stop_id', stop_id);
    }
}
