import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationApiService {

  constructor(
    private http: HttpClient
  ) {}

  public login(loginCredentials: {}): Observable<any> {
    const url = 'http://localhost:8000/login'
    return this.http.post(url, loginCredentials);
  }
}
