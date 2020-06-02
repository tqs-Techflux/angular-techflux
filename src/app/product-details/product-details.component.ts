import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../services/api.service';
import {Product} from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prod: Product;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // change paths
    this.api.get('/products/id=' + id).subscribe(data => {
      this.prod = data;
    });
  }

}
