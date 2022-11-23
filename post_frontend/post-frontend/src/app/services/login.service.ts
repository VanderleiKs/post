import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app.constants';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router, private http: HttpClient) {}

  login(user: User) {
    const header = new HttpHeaders().set('content-type', 'application/json');

    console.log(JSON.stringify(user));
    return this.http
      .post(AppConstants.baseURL + 'login', JSON.stringify(user), {
        headers: header,
      })
      .subscribe((data) => console.log(data));
  }
}
