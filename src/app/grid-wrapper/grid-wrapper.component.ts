import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-grid-wrapper',
  templateUrl: './grid-wrapper.component.html',
  styleUrls: ['./grid-wrapper.component.css']
})
export class GridWrapperComponent {

  @Input() columns?: string[];
  @Input() data?: any[];
  @Input() usePagination: boolean = true;
  @Input() useSorting: boolean = true;

  displayedColumns?: any[] = [];
  dataSource?: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator?: MatPaginator ;
  @ViewChild(MatSort) sort?: MatSort;

  ngOnInit() {
    this.displayedColumns = this.columns;
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    if (this.usePagination) {
      this.dataSource.paginator = this.paginator;
    }
    
    if (this.useSorting) {
      this.dataSource.sort = this.sort;
    }
  }

}
