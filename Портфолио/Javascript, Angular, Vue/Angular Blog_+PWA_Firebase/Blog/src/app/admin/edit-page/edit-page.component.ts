import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../shared/posts.service";
import {Subscription, switchMap} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../shared/interfaces";
import {AlertService} from "../shared/services/alert.service";
@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {
  form: FormGroup
  post: Post
  submitted = false
  uSub: Subscription
  constructor(private route: ActivatedRoute,
              private postService: PostsService,
              private alert: AlertService
  ) {
  }
  ngOnInit() {
    console.log(this.route.params)
    this.route.params
      .pipe(switchMap((params) => {
        return this.postService.getByID(params['id'])
      })).subscribe((post) => {
      this.post = post
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required)
      })
    })
  }
  submit() {
    if (this.form.invalid) {
      return
    }
    this.submitted = true
    this.uSub = this.postService.update({
      ...this.post,
      text: this.form.value.text,
      title: this.form.value.title
    }).subscribe(() => {
      this.submitted = false
      this.alert.success('Post Updated')
    })
  }
  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe()
    }
  }
}
