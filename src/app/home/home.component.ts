import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items : Product[] = [];

  constructor() { }

  ngOnInit(): void {
    // Static items
    this.items.push(new Product("Kingston SSD 480GB", "ssd", 62.74, "assets/images/kingstonssd.webp"))
    this.items.push(new Product("Samsung 970 EVO Plus 500GB", "ram stick", 133.95, "assets/images/ram.webp"))
    this.items.push(new Product("Kingston SSD 480GB", "ssd", 62.74, "assets/images/kingstonssd.webp"))
    this.items.push(new Product("Kingston SSD 480GB", "ssd", 62.74, "assets/images/kingstonssd.webp"))
    this.items.push(new Product("Kingston SSD 480GB", "ssd", 62.74, "assets/images/kingstonssd.webp"))
    this.items.push(new Product("Samsung 970 EVO Plus 500GB", "ram stick", 133.95, "assets/images/ram.webp"))
    this.items.push(new Product("Samsung 970 EVO Plus 500GB", "ram stick", 133.95, "assets/images/ram.webp"))
    this.items.push(new Product("Samsung 970 EVO Plus 500GB", "ram stick", 133.95, "assets/images/ram.webp"))
    this.items.push(new Product("Samsung 970 EVO Plus 500GB", "ram stick", 133.95, "assets/images/ram.webp"))
    this.items.push(new Product("Samsung 970 EVO Plus 500GB", "ram stick", 133.95, "assets/images/ram.webp"))
    this.items.push(new Product("Samsung 970 EVO Plus 500GB", "ram stick", 133.95, "assets/images/ram.webp"))
    this.items.push(new Product("Samsung 970 EVO Plus 500GB", "ram stick", 133.95, "assets/images/ram.webp"))
    //
  }

}
