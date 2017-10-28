import * as moment from 'moment';

/**
 * Item type
 */
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

/**
 * Item
 */
export class ExeciseItem {
  public ID: number;
  public Question: string;
  public Answer: string;
  public Types: string;
  public CreatedBy: string;
  public CreatedAt: moment.Moment;
}
