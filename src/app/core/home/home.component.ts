import {
    Component,
    OnInit,
    OnDestroy
  } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobSearchService } from '../services/core.service';
import { AuthenticationService } from '../services/auth.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

    public jobs: Array<any>;
    private jobSubscription: Subscription;
    private jobSaveSubscription: Subscription;
    public errorMessage: string = '';
    public showErrorMessage: boolean = false;

    private userToken: any = {
      email: '',
      id: ''
    };

    constructor(
      private jobSearchService: JobSearchService,
      private authService: AuthenticationService,
    ) { }

    ngOnInit() {
      this.jobSubscription = this.jobSearchService.jobsAsObservables()
        .subscribe((jobs) => {
          console.log(jobs);
          this.userToken = this.authService.userToken;
          this.jobs = jobs;
        })
      this.jobSaveSubscription = this.jobSearchService.saveJobResponseAsObservables()
        .subscribe((response) => {
          if (response.status === 409) {
            this.errorMessage = 'You have already saved this job';
            this.showErrorMessage = true;
            setTimeout(() => {
              this.showErrorMessage = false;
            }, 3000);
          }
        })
    }

    ngOnDestroy() {
      this.jobSubscription.unsubscribe();
      this.jobSaveSubscription.unsubscribe();
    }

    public selectedJob(job): void {
      let jobToBeSaved = job;
      jobToBeSaved.au = this.userToken.email;
      jobToBeSaved.userId = this.userToken.id;
      this.jobSearchService.saveJob(job);
    }
}
