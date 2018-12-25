import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    private authSubscription: Subscription;
    private loggedInUser: string = '';

    constructor(
      private authService: AuthenticationService
    ) { }

    ngOnInit() {
      this.authSubscription = this.authService.authAsObservables()
        .subscribe((data) => {
          if (data) {
            this.loggedInUser = data.email;
          }
        })
    }

    public logout(): void {
      this.loggedInUser = '';
      localStorage.removeItem('currentUser');
    }
}
