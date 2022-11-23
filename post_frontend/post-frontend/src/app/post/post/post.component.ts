import { ListKeyManager } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Component, NgIterable, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ModalPostComponent } from '../modal-post/modal-post.component';
import { PostService } from './post.service';

export type Post = {
  id: number;
  topic: string;
  text: string;
};

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  data: Post[] = [];
  constructor(public dialog: MatDialog, private postService: PostService) {
    this.listP();
  }

  url: string = 'http://localhost:8080/posts';

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ModalPostComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  listP(): void {
    this.postService.findAll().subscribe((p) => (this.data = p));
  }

  ngOnInit(): void {}
}
