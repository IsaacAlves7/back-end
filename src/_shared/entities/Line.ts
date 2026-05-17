export class Line {
    public readonly id!: number;

    public name: string;
    public stop_id?: number;

    constructor(props: Omit<Line, 'id'>, id?: number) {
        this.name = props.name;

        if (id != undefined) {
            this.id = id;
        }

        if (props.stop_id != undefined) {
            this.stop_id = props.stop_id;
        }
    }
}
