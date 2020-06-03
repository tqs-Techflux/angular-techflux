import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User;
  edit = false;
  profileForm: FormGroup;

  constructor(private userService: UserService, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe( (user) => {
      this.user = user;
      this.profileForm = this.formBuilder.group({
        newFName: this.user.firstName,
        newLName: this.user.lastName,
        newEmail: this.user.email,
        newContact: this.user.contact
      });
    });
  }

  editProfile(){
    this.edit = true;
  }

  saveProfile(form){
    this.edit = false;
    const formData = new FormData();
    Object.keys(form).forEach((key) => { formData.append(key, form[key]); });
    this.api.put('/update/details', formData).subscribe(
      (data) => {
        this.userService.update(data);
      },
    (err) => {
        console.log('Could not update profile');
    }
    );
  }

}
