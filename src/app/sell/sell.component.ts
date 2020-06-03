import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Category} from '../models/category';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  sellForm: FormGroup;
  categories: Category[] = [new Category('Mobile')];
  file = null;

  constructor(private api: ApiService, private formBuilder: FormBuilder) {
    this.sellForm = this.formBuilder.group({
      name: '',
      category: '',
      description: ''
    });
  }

  ngOnInit(): void {
    this.api.populateCategories().subscribe((category) => this.categories = category);
  }

  listProduct(product) {
    console.log(product);
  }

  onFileSelected(event){
    this.file = event.target.files[0];
  }

}
