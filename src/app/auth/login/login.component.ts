import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  homeBanner = '../../../assets/images/home-banner.jpg';
  lmcLogo = '../../../assets/images/logo-lmc-white.png';
  whiteCheck = '../../../assets/images/checked-white.svg';
  emailIcon = '../../../assets/images/message.svg';
  passwordIcon = '../../../assets/images/lock.svg';
  viewIcon = '../../../assets/images/view.svg';
  googleLogo = '../../../assets/images/google.svg';
  memLogo = '../../../assets/images/mem.png';
  loginForm!: FormGroup;
  passwordFieldType: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  viewPassword() {
    this.passwordFieldType = !this.passwordFieldType;
  }

  onSignin() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;

    if (email === environment.EMAIL && password === environment.PASSWORD) {
      localStorage.setItem('authenticated', 'true');
      return this.router.navigate(['home/users']);
    }
    return alert('Invalid credentials');
  }
}
