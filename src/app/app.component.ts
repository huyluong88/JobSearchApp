import { Component, OnInit } from '@angular/core';
// import { JobSearchService } from './app.component.service';
// import Job from './job.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [JobSearchService],
})
export class AppComponent implements OnInit {

  // public jobs: Array<Job>

  constructor(
    // private jobSearchService: JobSearchService
  ) {}
  ngOnInit() {
  }

}
