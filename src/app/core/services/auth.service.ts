import { Observable, Subject, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationApiService } from './auth-api.service';
import * as jwt_decode from "jwt-decode";

@Injectable()
export class AuthenticationService {

  constructor(
      private http: HttpClient,
      private authApiService: AuthenticationApiService,
    ) {}

  private authSubject = new Subject<any>();

  public authAsObservables(): Observable<any> {
    return this.authSubject.asObservable();
  }

  public login(loginCredentials: {}): void {
    this.authApiService.login(loginCredentials)
      .subscribe((data) => {
        console.log('from auth service ', data);
        if (data && data.token) {
          const decodedJwt = jwt_decode(data.token);
          localStorage.setItem('currentUser', JSON.stringify(decodedJwt))
          this.authSubject.next(decodedJwt);
        }
        (error) => {throw new Error(error)};
      })
  }
}
