import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from 'src/app/types/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.css'],
})
export class ModalPostComponent implements OnInit {
  constructor(
    public modalPost: MatDialogRef<ModalPostComponent>,
    private service: PostService
  ) {}
  post!: FormGroup;

  get topic() {
    return this.post.get('topic')!;
  }

  get text() {
    return this.post.get('text')!;
  }

  insertNewPost() {
    this.service.insertNewPost(this.post.value);
  }

  ngOnInit(): void {
    this.post = new FormGroup({
      topic: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
    });
  }
}
