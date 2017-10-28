import * as moment from 'moment';

/**
 * Item type
 */
export class ExerciseItemType {
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
export class ExerciseItem {
  public ID: number;
  public Question: string;
  public Answer: string;
  public Types: string;
  public CreatedBy: string;
  public CreatedAt: moment.Moment;

  // UI display
  public TypeList: string[] = [];

  public onSetData(data: any) {
    if (data && data.id) {
      this.ID = +data.id;
    }
    if (data && data.question) {
      this.Question = data.question;
    }
    if (data && data.answer) {
      this.Answer = data.answer;
    }
    if (data && data.types) {
      this.Types = data.types;
    }
    if (data && data.createdBy) {
      this.CreatedBy = data.createdBy;
    }
    if (data && data.createdAt) {
      this.CreatedAt = moment(data.createdAt);
    }
  }
}
