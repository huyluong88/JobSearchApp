import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class JobSearchApiService {

  constructor(
    private http: HttpClient
  ) {}

  public getJobs(searchText: string, stateText?: string): Observable<any> {
    const url = `https://jobs.search.gov/jobs/search.json?`;
    const queryParams = {
      query: searchText+'+jobs'
    }
    if (stateText) {
      queryParams.query += '+in+' + stateText;
    }
    return this.http.get(url, {params: queryParams})
  }

  public saveJob(job: {}): Observable<any> {
    const url = 'http://localhost:8000/save-job';
    return this.http.post(url, job)
    .catch((err: HttpErrorResponse) => {
      return Observable.of(err);
    })
  }
}
