import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { JobSearchService } from './services/core.service';

@Component({
    selector: 'job-search-box',
    templateUrl: './job-search-box.component.html',
    styleUrls: ['./job-search-box.component.scss'],
    // providers: [JobSearchService]
})
export class JobSearchBoxComponent implements OnInit {

    constructor(
      // private jobSearchService: JobSearchService,
      // private router: Router
    ) { }

    ngOnInit() {
    }
}
