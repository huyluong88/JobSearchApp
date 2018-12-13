import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JobSearchService {

  constructor(
      private http: HttpClient,
    ) {}

  private jobsSubject = new Subject<any>();

  public jobsAsObservables(): Observable<any> {
    return this.jobsSubject.asObservable();
  }

  public getJobs(searchText: string): void {
    const url = `http://api.dataatwork.org/v1/jobs/autocomplete?contains=${searchText}`;
    this.http.get(url)
      .subscribe((data) => {
        this.jobsSubject.next(data);
        (err) => { throw new Error(err)};
      });
  }
}
