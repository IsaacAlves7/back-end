import { Stop } from '../../../_shared/entities/Stop';

export interface IStopsRepository {
    create(stop: Stop): Promise<void>;
    update(stop: Stop): Promise<void>;
    delete(id: number): Promise<void>;
    getById(id: number): Promise<Stop[]>;
    getAll(): Promise<Stop[]>;
    getByPosition(stop: Stop): Promise<Stop[]>;
}
