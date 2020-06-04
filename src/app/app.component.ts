import {Component, OnInit} from '@angular/core';
import {SidebarService} from './services/sidebar.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from './services/api.service';
import {Router} from '@angular/router';
import {User} from './models/user';
import {UserService} from './services/user.service';
import {Category} from './models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-techflux';
  searchForm: FormGroup;
  categories: Category[] = [];
  public user: User;
  public isAuthenticated;

  constructor(private formBuilder: FormBuilder,
              private service: SidebarService,
              private router: Router,
              private userService: UserService,
              private api: ApiService) {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }

  ngOnInit(): void {
    this.userService.populate();
    this.api.populateCategories().subscribe((category) => this.categories = category);
    this.userService.isAuthenticated.subscribe( (authenticated) => {
      this.isAuthenticated = authenticated;
    });
    this.userService.currentUser.subscribe( (user) => this.user = user);
  }

  onSearch() {
    const query = this.searchForm.value.search;
    this.searchForm.reset();
    this.router.navigate([''], { queryParams: { search: query } });
  }

  sidebar(){
    return this.service.sidebar;
  }

  toggleSidebar(){
    this.service.toggle();
  }

  logout(): void {
    this.userService.purgeAuth();
    this.router.navigate(['']);
  }
}
