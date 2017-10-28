import { Injectable, EventEmitter } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, HttpResponse, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';
import { ExerciseItemType, ExerciseItem } from './common';

@Injectable()
export class StorageService {
  listItemTypeChange: BehaviorSubject<ExerciseItemType[]> = new BehaviorSubject<ExerciseItemType[]>([]);
  get ItemTypes(): ExerciseItemType[] {
    return this.listItemTypeChange.value;
  }

  listItemChange: BehaviorSubject<ExerciseItem[]> = new BehaviorSubject<ExerciseItem[]>([]);
  get Items(): ExerciseItem[] {
    return this.listItemChange.value;
  }

  // Buffer
  private _isTypeListLoaded: boolean;
  private _isItemListLoaded: boolean;
  
  constructor(private _http: HttpClient) {
    this._isTypeListLoaded = false;
    this._isItemListLoaded = false;
  }

  public fetchAllExerciseItemTypes(forceReload?: boolean): Observable<ExerciseItemType[]> {
    if (!this._isTypeListLoaded || forceReload) {
      const apiurl = environment.ApiUrl + '/ExerItemType';

      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json')
        .append('Accept', 'application/json')

      return this._http.get(apiurl, {
          headers: headers
        })
        .map((response: HttpResponse<any>) => {
          let listRst: ExerciseItemType[] = [];
          const rjs = <any>response;

          if (rjs instanceof Array && rjs.length > 0) {
            for (const si of rjs) {
              const rst: ExerciseItemType = new ExerciseItemType();
              rst.onSetData(si);
              listRst.push(rst);
            }
          }

          this._isTypeListLoaded = true;
          this.listItemTypeChange.next(listRst);

          return listRst;
        })
        .catch((error: HttpErrorResponse) => {

          this._isTypeListLoaded = false;
          this.listItemTypeChange.next([]);

          return Observable.throw(error.statusText + "; " + error.error + "; " + error.message);
        });
    } else {
      return Observable.of(this.listItemTypeChange.value);
    }
  }

  public fetchAllExerciseItems(forceReload?: boolean): Observable<ExerciseItem[]> {
    if (!this._isTypeListLoaded || forceReload) {
      const apiurl = environment.ApiUrl + '/ExerciseItem';

      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json')
        .append('Accept', 'application/json')

      return this._http.get(apiurl, {
          headers: headers
        })
        .map((response: HttpResponse<any>) => {
          let listRst: ExerciseItem[] = [];
          const rjs = <any>response;

          if (rjs instanceof Array && rjs.length > 0) {
            for (const si of rjs) {
              const rst: ExerciseItem = new ExerciseItem();
              rst.onSetData(si);
              listRst.push(rst);
            }
          }

          this._isItemListLoaded = true;
          this.listItemChange.next(listRst);

          return listRst;
        })
        .catch((error: HttpErrorResponse) => {

          this._isItemListLoaded = false;
          this.listItemChange.next([]);

          return Observable.throw(error.statusText + "; " + error.error + "; " + error.message);
        });
    } else {
      return Observable.of(this.listItemChange.value);
    }
  }

  public readExerciseItem(itemid: number) {

  }
  public createExerciseItem(exitem: ExerciseItem) {

  }
  public deleteExerciseItem(itemid: number) {
    
  }
}
