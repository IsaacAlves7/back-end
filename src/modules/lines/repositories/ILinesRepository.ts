import { Line } from '../../../_shared/entities/Line';

export interface ILinesRepository {
    create(line: Line): Promise<void>;
    update(line: Line): Promise<void>;
    delete(id: number): Promise<void>;
    getById(id: number): Promise<Line[]>;
    getAll(): Promise<Line[]>;
    getByStop(stop_id: number): Promise<Line[]>;
}
