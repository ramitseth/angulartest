import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { basePath } from '../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class FirstService {

  constructor(private httpClient: HttpClient) {}

  getDeadline(): Observable<any> {
    return this.httpClient.get(`${basePath}/deadline`);
  }
}
