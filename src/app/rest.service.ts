import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Complex } from './complex';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public get http(): HttpClient {
    return this._http;
  }
  public set http(value: HttpClient) {
    this._http = value;
  }
  

    private baseUrl = "http://localhost:8080/api/users";

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<Complex[]> {
    return this.http.get<Complex[]>(`${this.baseUrl}`);

  }
}
