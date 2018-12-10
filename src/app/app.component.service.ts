import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class GithubJobsService {
  constructor( private http: HttpClient ) {}
  private url: string = 'http://api.dataatwork.org/v1/jobs/autocomplete?contains="developer"';
  private githubJobsSubject = new Subject<any>();

  public getGithubJobsAsObservables(): Observable<any> {
    return this.githubJobsSubject.asObservable();
  }

  public getGithubJobs(): void {
    //make api call here
    this.http.get(this.url)
      .subscribe(data => {
        console.log('data is ', data);
        this.githubJobsSubject.next(data);
      })
  }
}
