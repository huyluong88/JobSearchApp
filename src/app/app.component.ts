import { Component, OnInit } from '@angular/core';
import { JobSearchService } from './app.component.service';
import { Subscription } from 'rxjs';
import Job from './job.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JobSearchService],
})
export class AppComponent implements OnInit {

  public jobSearchText: string;
  public jobSubscription: Subscription;
  public jobs: Array<Job>

  constructor( private jobSearchService: JobSearchService) {}
  ngOnInit() {
    this.jobSubscription = this.jobSearchService.jobsAsObservables()
      .subscribe((jobs) => {
        this.jobs = jobs;
        console.log('jobs from subscription', this.jobs);
      })
  }

  public searchForJobs() {
    console.log('i am working', this.jobSearchText);
    this.jobSearchService.getJobs(this.jobSearchText);
  }
}
