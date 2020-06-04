import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SidebarService} from '../services/sidebar.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit, OnDestroy {

  signupForm: FormGroup;

  constructor(public fb: FormBuilder,
              private sidebarService: SidebarService,
              private userService: UserService,
              private router: Router
  ) {
    this.signupForm = this.fb.group({
      fName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      contact: ['']
    });
  }

  ngOnInit(): void {
    this.sidebarService.sidebar = false;
    document.getElementById('sidebarCollapse').hidden = true;
  }

  ngOnDestroy(): void {
    document.getElementById('sidebarCollapse').hidden = false;
  }

  doSignUp(info) {
    if (info.status === 'VALID') {
      const formData = new FormData();
      Object.keys(info.value).forEach((key) => { formData.append(key, info.value[key]); });
      this.userService.signUp(formData).subscribe(() => {
        this.router.navigate(['/']);
      }, (err) => {
        console.log('Failed to sign up');
      });
    }
  }

  get firstname() { return this.signupForm.get('fName'); }
  get lastname() { return this.signupForm.get('lName'); }
  get password() { return this.signupForm.get('password'); }
  get email() { return this.signupForm.get('email'); }

}
