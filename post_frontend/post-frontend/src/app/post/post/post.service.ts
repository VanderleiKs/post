import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.component';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/posts');
  }
}
