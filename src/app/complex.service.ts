import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Complex } from './complex';
import { Location } from './location';
import { Partsource } from './partsource';
import { Brokenpackreport } from './brokenpackreport';


@Injectable({
  providedIn: 'root'
})
export class ComplexService {
  httpclient: any;
  getComplexs() {
      throw new Error('Method not implemented.');
  }

  public get http(): HttpClient {
    return this._http;
  }
  public set http(value: HttpClient) {
    this._http = value;
  }

  /**URL Defination
  */
  private baseUrl = "http://localhost:8085/dealers/complexList";
  private baseUrl1 = "http://localhost:8085/dealers/location";
  private locationurl = "http://localhost:8085/dealers/location";
  private partsourceurl = "http://localhost:8085/dealers/casePartSource";
  private brokenreporturl = "http://localhost:8085/dealers/brokenPackReport"
  


  constructor(private _http: HttpClient) { }
  /**Complex for accesing the url
  */

  getUsers(): Observable<Complex[]> {
    return this.http.get<Complex[]>(`${this.baseUrl}`);
  }

  /**location for accesing the url
  */

  getLocations(ComplexSelected1:number):Observable<Location[]>
  {
    let params1 = new HttpParams().set('complexId',ComplexSelected1);
    return this.http.get<Location[]>(`${this.locationurl}`,{params:params1});
    console.log(params1);
    console.log(this.locationurl);
  }


  getpartsources(locationSelected:string):Observable<Partsource[]>
  {
    let params2 = new HttpParams().set('dealer_city',locationSelected);
    return this.http.get<Partsource[]>(`${this.partsourceurl}`,{params:params2});
    console.log(params2);
    console.log(this.partsourceurl);
  }


  getbrokenpackresult(ComplexSelected1:number,locationSelected:string,partsourceSelected:string):Observable<Brokenpackreport[]>
  {
    let params3 = new HttpParams().set('complexId',ComplexSelected1)
                                  .set('dealer_city',locationSelected)
                                  .set('part_source',partsourceSelected);
    return this.http.get<Brokenpackreport[]>(`${this.brokenreporturl}`,{params:params3});
    console.log(params3);
    console.log(this.brokenreporturl);

  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }



}
