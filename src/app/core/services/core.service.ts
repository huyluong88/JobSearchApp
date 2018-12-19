import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
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

  public jobsAsObservables(): Observable<any> {
    return this.jobsSubject.asObservable();
  }

  public getJobs(searchText: string): void {
    this.jobSearchApiService.getJobs(searchText)
      .subscribe((data) => {
        console.log('from service ', data);
        this.jobsSubject.next(data);
      })
  }
}
