import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../models/product";
import {ApiService} from "../services/api.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items : Product[] = [];

  constructor(private api : ApiService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      var query = params['search']
      if (query){
        this.api.search(query).subscribe((products) => {
          this.items=products;
        })
      } else {
        this.api.populateProducts().subscribe((products) => {
          this.items = products;
        })
      }
    })
  }
}
