import {Component, OnInit} from '@angular/core';
import {SidebarService} from "./services/sidebar.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "./services/api.service";
import {Product} from "./models/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-techflux';
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: SidebarService,private router: Router) {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }

  onSearch() {
    var query = this.searchForm.value.search;
    console.log("query: ",query);
    this.searchForm.reset();
    this.router.navigate([''], { queryParams: { search: query } });
  }

  sidebar(){
    return this.service.sidebar;
  }

  toggleSidebar(){
    this.service.toggle();
  }
}
