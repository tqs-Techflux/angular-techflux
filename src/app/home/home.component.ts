import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../models/product';
import {ApiService} from '../services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Product[] = [];

  constructor(private api: ApiService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const query = params.search;
      if (query){
        this.api.search(query).subscribe((products) => {
          this.items = products;
        });
      } else {
        this.api.populateProducts().subscribe((products) => {
          this.items = products.filter((prod) => {
            if (!prod.picture){
              prod.picture = '../../assets/images/undefined.jpg';
            }
            return prod;
          });
        });
      }
    });
  }
}
