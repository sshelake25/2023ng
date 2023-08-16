import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Observable,
  filter,
  find,
  first,
  from,
  interval,
  map,
  take,
} from 'rxjs';
import { ApiService } from '../api.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CdkColumnDef, CdkRowDef } from '@angular/cdk/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface UserConfig {
  name: string;
  age: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mytable = ViewChild('tablemy');
  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  configSelection = new SelectionModel<UserConfig>(true, []);

  public timer = from([1, 2, 3]);

  public configs?: any;;

  public data = ELEMENT_DATA

  configDisplayedColumns: string[] = ['checkbox', 'name', 'age', 'date'];

  @ViewChild(MatTable, { static: true }) table: any;

  constructor(private myapi: ApiService) {}

  myuser = [
    {
      name: 'sss',
      age: 20
    },
    {
      name: 'ff',
      age: 30
    }
  ]

  ngOnInit() {
  
    this.myapi.getConfigs().subscribe({
      next: (success) => {
         this.configs = success;
        this.configs = [];
      },
      error: (error) => {
        console.log(error);
      },
    });

    //  this.myhttp.get('http://hee.com')
    //  .subscribe(
    //{
    //   next: (success) => {
    //     console.log(`m ==> ${success}`);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });

    let numbers = [20, 45, 50, 10, 1, 4];
    let final = numbers.filter((val) => val > 20);
    console.log(final);

    //let timer = from([1,2,3]); // creating strem of values called observable by rxjs
    this.timer.subscribe((values) => console.log(values));

    let myInternal = interval(1).pipe(
      take(100),
      map((val) => val * 2),
      filter((val) => val > 20)
      // find((value) => value > 99)
    ); // emit strean if values // obser

    // myInternal.subscribe({
    //   next: (success) => {
    //     console.log(`I am out put of stream ==> ${success}`);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  getCellTemplate() {
    // this.table?.addRowDef(
    //   new CdkRowDef({ columns: this.configDisplayedColumns })
    // );

    this.table.removeColumnDef(new CdkColumnDef('name'))

    //this.table?.setNoDataRow(null);
    // extractCellTemplate(this.configDisplayedColumns[0])
  }
}
