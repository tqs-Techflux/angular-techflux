import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SidebarService} from "../services/sidebar.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit,OnDestroy {

  signupForm: FormGroup;

  constructor(public fb: FormBuilder,
              private sidebarService: SidebarService
  ) {
    this.signupForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.sidebarService.sidebar = false;
    document.getElementById("sidebarCollapse").hidden = true;
  }

  ngOnDestroy(): void {
    document.getElementById("sidebarCollapse").hidden = false;
  }

  doSignUp() {
    alert("");
  }

}
