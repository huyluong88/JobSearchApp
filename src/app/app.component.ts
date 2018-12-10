import { Component, OnInit } from '@angular/core';
import { GithubJobsService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubJobsService],
})
export class AppComponent implements OnInit {
  constructor( private githubJobsService: GithubJobsService) {}
  ngOnInit() {
    this.githubJobsService.getGithubJobs();
  }
}
