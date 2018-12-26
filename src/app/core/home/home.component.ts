import {
    Component,
    OnInit,
    OnDestroy
  } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobSearchService } from '../services/core.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

    public jobs: Array<any>;
    public jobSubscription: Subscription;

    constructor(
      private jobSearchService: JobSearchService,
    ) { }

    ngOnInit() {
      this.jobSubscription = this.jobSearchService.jobsAsObservables()
        .subscribe((jobs) => {
          this.jobs = jobs;
          console.log('jobs from home', jobs);
        })
    }

    ngOnDestroy() {
      this.jobSubscription.unsubscribe();
    }

    public selectedJob(job): void {
      //add all selected jobs into an array
      console.log(job);
      this.jobSearchService.saveJob(job);
    }
}
