import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {
 
  numbers = [10, 20, 30];

  menuLists = [{
    name: "app",
    icon: "google"
  }, {
    name: "status",
    icon: "micros"
  }];

}
