export interface IGetStopsByPositionRequestDTO {
    latitude: number;
    longitude: number;
    latitudeRange?: number;
    longitudeRange?: number;
}
