import {
    Component,
    OnInit,
    OnDestroy
  } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    public email: string = '';
    public password: string;
    private emailReg: any = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    public errorMessage: string;
    private authSubscription: Subscription;

    constructor(
      private authService: AuthenticationService,
      private router: Router,
    ) {}

    ngOnInit() {
      this.authSubscription = this.authService.authAsObservables()
        .subscribe((response) => {
          console.log('from component ', response);
          if (response) {
            this.router.navigate(['/'])
          } else {
            this.errorMessage = 'There was a problem logging in';
          }
        })
    }

    ngOnDestroy() {
      this.authSubscription.unsubscribe();
    }

    public login(): void {
      if (this.email.match(this.emailReg) && this.password) {
        const loginCredentials = {
          email: this.email,
          password: this.password
        }
        this.authService.login(loginCredentials);
      } else {
        this.errorMessage = 'Please enter in a valid email and or password';
      }
    }
}
