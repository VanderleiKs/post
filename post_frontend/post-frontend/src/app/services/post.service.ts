import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app.constants';
import { Post } from '../types/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient, private router: Router) {}

  insertNewPost(post: Post) {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    this.http
      .post(AppConstants.baseURL + 'posts', JSON.stringify(post), {
        headers: headers,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
