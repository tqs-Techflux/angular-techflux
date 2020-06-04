import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SidebarService} from '../services/sidebar.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  constructor(public fb: FormBuilder,
              private sidebarService: SidebarService,
              private userService: UserService,
              private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.sidebarService.sidebar = false;
    document.getElementById('sidebarCollapse').hidden = true;
  }

  ngOnDestroy(): void {
    document.getElementById('sidebarCollapse').hidden = false;
  }

  doLogin() {
    this.userService.attemptAuth({username: this.loginForm.value.email, password: this.loginForm.value.password}).subscribe(
      (data) => {this.router.navigate(['/']); }
    );
  }

}
