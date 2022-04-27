import {Component, OnInit} from '@angular/core';
import {Post} from "../shared/interfaces";
import {Observable, switchMap} from "rxjs";
import {PostsService} from "../shared/posts.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post$: Observable<Post>
  constructor(private route: ActivatedRoute,
              private postsService: PostsService) {
  }
  ngOnInit() {
    this.post$ = this.route.params
      .pipe(switchMap((params) => {
        return this.postsService.getByID(params['id'])
      }))
  }
}
