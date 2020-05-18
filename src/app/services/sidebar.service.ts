import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SidebarService {
  public sidebar : boolean;

  constructor() {
    this.sidebar = false;
  }

  toggle(){
    this.sidebar = !this.sidebar;
  }
}
