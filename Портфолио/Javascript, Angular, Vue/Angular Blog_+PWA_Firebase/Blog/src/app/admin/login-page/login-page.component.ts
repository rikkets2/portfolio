import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/interfaces";
import {AuthService} from "../shared/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup
  submitted = false
  message: string
  constructor(public auth: AuthService,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['loginAgain']) {
        this.message = 'You need to login'
      } else if (params['authFailed']) {
        this.message = 'Session timeout, try again'
      }
    })
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }
  submit() {
    if (this.form.invalid) {
      return
    }
    this.submitted = true
    const user: User =
      {
        email: this.form.value.email,
        password: this.form.value.password,
      }
    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard'])
      this.submitted = false
    }, () => this.submitted = false)
  }
}
