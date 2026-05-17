export class Stop {
    public readonly id!: number;

    public name?: string;
    public latitude: number;
    public longitude: number;

    public latitudeRange?: number;
    public longitudeRange?: number;

    constructor(props: Omit<Stop, 'id'>, id?: number) {
        this.latitude = props.latitude;
        this.longitude = props.longitude;

        if (id != undefined) {
            this.id = id;
        }

        if (props.name != undefined) {
            this.name = props.name;
        }

        if (props.latitudeRange != undefined) {
            this.latitudeRange = props.latitudeRange;
        }

        if (props.longitudeRange != undefined) {
            this.longitudeRange = props.longitudeRange;
        }
    }
}
