import {
    Component,
    OnInit,
    OnDestroy
  } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'user-signup',
    templateUrl: './user-signup.component.html',
    styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements OnInit, OnDestroy {

    public email: string = '';
    public password: string;
    private emailReg: any = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    public errorMessage: string;
    private userSignupSubscription: Subscription;

    constructor(
      private authService: AuthenticationService,
      private router: Router,
    ) { }

    ngOnInit() {
      this.userSignupSubscription = this.authService.userSignupAsObservables()
        .subscribe((response) => {
          if (response) {
            this.router.navigate(['/']);
          } else {
            this.errorMessage = 'email already existed';
          }
        })
    }

    ngOnDestroy() {

    }

    public signup(): void {
      if (this.email.match(this.emailReg) && this.password) {
        const loginCredentials = {
          email: this.email,
          password: this.password
        }
        this.authService.signup(loginCredentials);
      } else {
        this.errorMessage = 'Please enter in a valid email and or password';
      }
    }
}
