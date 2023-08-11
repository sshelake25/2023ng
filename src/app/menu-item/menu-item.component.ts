import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() itemConfig: any;

  @Input() layout: any;

  //custome logic 

  ngOnInit() {
    this.fixLayoutOfMenus();
  }

  //
  private fixLayoutOfMenus() {
    console.log( `This value comming from parant  :  --> `);
    console.log(this.layout)
  }

}
