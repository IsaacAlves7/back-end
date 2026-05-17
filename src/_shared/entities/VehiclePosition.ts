export class VehiclePosition {
    public readonly id!: number;

    public latitude: number;
    public longitude: number;
    public vehicle_id?: number;

    constructor(props: Omit<VehiclePosition, 'id'>, id?: number) {
        this.latitude = props.latitude;
        this.longitude = props.longitude;

        if (id != undefined) {
            this.id = id;
        }

        if (props.vehicle_id != undefined) {
            this.vehicle_id = props.vehicle_id;
        }
    }
}
