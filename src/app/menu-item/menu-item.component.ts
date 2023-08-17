import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent implements OnInit {
  @Input() itemConfig: any;

  @Input() layout: any;

  @Output() itemAdded = new EventEmitter();

  

  ngOnInit() {
    this.fixLayoutOfMenus();
    
  }

  private fixLayoutOfMenus() {
    console.log( `This value comming from parant  :  --> `);
    console.log(this.layout)
  }

  addNewItem(value: string) {
    this.itemAdded.emit(value);
  }

}
