import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User;
  edit = false;
  profileForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe( (user) => {
      this.user = user;
      this.profileForm = this.formBuilder.group({
        first_name: this.user.firstName,
        last_name: this.user.lastName,
        email: this.user.email,
        contact: this.user.contact
      });
    });
  }

  editProfile(){
    this.edit = true;
  }

  saveProfile(form){
    this.edit = false;
  }

}
