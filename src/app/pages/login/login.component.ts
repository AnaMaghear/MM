import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    this.router.navigate(['/']);
  }

  get email(): string | undefined | null {
    return this.loginForm.get('email')?.value;
  }

  get password(): string | undefined | null {
    return this.loginForm.get('password')?.value;
  }
}
