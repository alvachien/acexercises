
export class ExeciseItemType {
    public ID: number;
    public Name: string;
    public Details: string;

    public onSetData(data: any) {
        if (data && data.id) {
            this.ID = +data.id;
        }
        if (data && data.name) {
            this.Name = data.name;
        }
        if (data && data.details) {
            this.Details = data.details;
        }
    }
}

export class ExeciseItem {

}
