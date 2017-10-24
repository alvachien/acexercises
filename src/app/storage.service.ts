import { Injectable, EventEmitter } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, HttpResponse, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';
import { ExeciseItemType } from './common';

@Injectable()
export class StorageService {
  listItemTypeChange: BehaviorSubject<ExeciseItemType[]> = new BehaviorSubject<ExeciseItemType[]>([]);
  get ItemTypes(): ExeciseItemType[] {
    return this.listItemTypeChange.value;
  }

  // Buffer
  private _isTypeListLoaded: boolean;
  
  constructor(private _http: HttpClient) {
    this._isTypeListLoaded = false;
  }

  public fetchAllExeciseItemTypes(forceReload?: boolean): Observable<ExeciseItemType[]> {
    if (!this._isTypeListLoaded || forceReload) {
      const apiurl = environment.ApiUrl + '/api/ExerItemType';

      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json')
        .append('Accept', 'application/json')

      return this._http.get(apiurl, {
          headers: headers
        })
        .map((response: HttpResponse<any>) => {
          let listRst: ExeciseItemType[] = [];
          const rjs = <any>response;

          if (rjs.totalCount > 0 && rjs.contentList instanceof Array && rjs.contentList.length > 0) {
            for (const si of rjs.contentList) {
              const rst: ExeciseItemType = new ExeciseItemType();
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
}
