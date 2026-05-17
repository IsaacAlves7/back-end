import { IStopsRepository } from '../../repositories/IStopsRepository';
import { IGetStopsByPositionRequestDTO } from './GetStopsByPositionRequestDTO';
import { Stop } from '../../../../_shared/entities/Stop';

export class GetStopsByPositionUseCase {
    private stopsRepository: IStopsRepository;

    constructor(stopsRepository: IStopsRepository) {
        this.stopsRepository = stopsRepository;
    }

    async execute(data: IGetStopsByPositionRequestDTO) {
        var latitudeRange = data.latitude;
        var longitudeRange = data.longitude;

        if (data.latitude < 0) {
            latitudeRange = data.latitude - 0.5;
        } else {
            latitudeRange = data.latitude + 0.5;
        }

        if (data.longitude < 0) {
            longitudeRange = data.longitude + 0.5;
        } else {
            longitudeRange = data.longitude - 0.5;
        }

        data.latitudeRange = latitudeRange;
        data.longitudeRange = longitudeRange;

        const stop = new Stop(data);

        return await this.stopsRepository.getByPosition(stop);
    }
}
