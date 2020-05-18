import {Component, OnInit} from '@angular/core';
import {SidebarService} from "./services/sidebar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-techflux';
  service: SidebarService;

  constructor(sidebarService: SidebarService) {
    this.service = sidebarService;
  }

  sidebar(){
    return this.service.sidebar;
  }

  toggleSidebar(){
    this.service.toggle();
  }
}
