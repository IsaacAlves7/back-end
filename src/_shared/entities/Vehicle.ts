export class Vehicle {
    public readonly id!: number;

    public name: string;
    public model: string;
    public line_id?: number;

    constructor(props: Omit<Vehicle, 'id'>, id?: number) {
        this.name = props.name;
        this.model = props.model;

        if (id != undefined) {
            this.id = id;
        }

        if (props.line_id != undefined) {
            this.line_id = props.line_id;
        }
    }
}
