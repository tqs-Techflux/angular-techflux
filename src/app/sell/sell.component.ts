import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Category} from '../models/category';
import {ApiService} from '../services/api.service';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  sellForm: FormGroup;
  categories: Category[] = [new Category('Mobile')];
  file = null;
  user: User;

  constructor(private api: ApiService, private formBuilder: FormBuilder, private userService: UserService) {
    this.sellForm = this.formBuilder.group({
      productName: '',
      catName: '',
      description: '',
      price: ''
    });
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe((us) => this.user = us);
    this.api.populateCategories().subscribe((category) => {this.categories = category; });
  }

  listProduct(product) {
    const formData = new FormData();
    Object.keys(product).forEach((key) => { formData.append(key, product[key]); });
    formData.append('ownerId',  '' + this.user.id);
    formData.append('picture', this.file);
    this.api.post('/products/add', formData).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  onFileSelected(event){
    this.file = event.target.files[0];
  }

}
