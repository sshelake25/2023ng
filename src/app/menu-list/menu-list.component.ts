import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {

  numbers = [10, 20, 30];

  layoutConfig = {
    direction: 'row',
    height: '100'
  }

  menuLists = [{
    name: "app",
    icon: "favorite"
  }, {
    name: "status",
    icon: "home"
  },
  {
    name: "home care",
    icon: "cancel"
  },
  {
    name: "more",
    icon: "bin"
  }];

}
