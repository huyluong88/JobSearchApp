import { Observable, Subject, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobSearchApiService } from './core-api.service';

@Injectable()
export class JobSearchService {

  constructor(
      private http: HttpClient,
      private jobSearchApiService: JobSearchApiService,
    ) {}

  private jobsSubject = new Subject<any>();
  private saveJobResponseSubject = new Subject<any>();

  public jobsAsObservables(): Observable<any> {
    return this.jobsSubject.asObservable();
  }

  public saveJobResponseAsObservables(): Observable<any> {
    return this.saveJobResponseSubject.asObservable();
  }

  public getJobs(searchText: string, stateText?: string): void {
    this.jobSearchApiService.getJobs(searchText, stateText)
      .subscribe((data) => {
        // console.log('from service ', data);
        this.jobsSubject.next(data);
        (error) => {throw new Error(error)};
      })
  }

  public saveJob(job: {}): void {
    this.jobSearchApiService.saveJob(job)
      .subscribe((response) => {
        console.log('from service ', response);
        this.saveJobResponseSubject.next(response);
      })
  }
}
