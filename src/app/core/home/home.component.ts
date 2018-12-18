import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { JobSearchService } from './services/core.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    // providers: [JobSearchService]
})
export class HomeComponent implements OnInit {

    constructor(
      // private jobSearchService: JobSearchService,
      private router: Router
    ) { }

    ngOnInit() {
    }
}
