import { Component, OnInit } from '@angular/core';
import { JobSearchService } from '../services/core.service';

@Component({
    selector: 'job-search-box',
    templateUrl: './job-search-box.component.html',
    styleUrls: ['./job-search-box.component.scss'],
    providers: [JobSearchService]
})
export class JobSearchBoxComponent implements OnInit {

    public jobSearchText: string;

    constructor(
      private jobSearchService: JobSearchService,
    ) { }

    ngOnInit() {
    }

    public searchForJobs() {
      this.jobSearchService.getJobs(this.jobSearchText);
    }
}
