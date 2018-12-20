import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobSearchService } from '../services/core.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    public jobs: Array<any>;
    public jobSubscription: Subscription

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
}
