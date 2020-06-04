import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../services/api.service';
import {Product} from '../models/product';
import {User} from '../models/user';
import {HttpHeaders} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prod: Product;
  seller: User;

  constructor(private route: ActivatedRoute, private api: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // change paths
    this.api.get('/products/id/' + id).subscribe(data => {
      this.prod = data;
      this.api.getBlob('/products/image/' + id, { responseType: 'blob' } ).subscribe((image) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          this.prod.picture = reader.result.toString();
        }, false);

        if (image) {
          reader.readAsDataURL(image);
        }
      });
      this.seller = data.owner;
      console.log(data);
    });
  }

}
