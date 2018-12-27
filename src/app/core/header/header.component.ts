import {
    Component,
    OnInit,
    OnDestroy
  } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

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

    ngOnDestroy() {
      this.authSubscription.unsubscribe();
    }

    public logout(): void {
      this.loggedInUser = '';
      localStorage.removeItem('currentUser');
      this.authService.userToken = '';
    }
}
