import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class JobSearchApiService {

  constructor(
    private http: HttpClient
  ) {}

  public getJobs(searchText: string): Observable<any> {
    const url = `http://api.dataatwork.org/v1/jobs/autocomplete?contains=${searchText}`;
    return this.http.get(url)
  }
}
