import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grid-wrapper',
  templateUrl: './grid-wrapper.component.html',
  styleUrls: ['./grid-wrapper.component.css'],
})
export class GridWrapperComponent {
  @Input() columns?: string[];
  @Input() data?: any[];
  @Input() usePagination: boolean = true;
  @Input() useSorting: boolean = true;

  @Input() enableRowSelection: boolean = false;
  @Output() rowClick = new EventEmitter<any>();
  @Output() rowSelectionChange = new EventEmitter<SelectionModel<any>>();

  displayedColumnsWithCheckbox?: any[] = [];
  displayedColumns?: any[] = [];
  dataSource?: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  selection = new SelectionModel<any>(true, []); // For multi-selection

  ngOnInit() {
    // this.displayedColumns = this.columns;
    this.dataSource = new MatTableDataSource(this.data);

    if (this.enableRowSelection) {
      this.displayedColumnsWithCheckbox = ['select'];
    }
    this.displayedColumns = this.columns;
  }

  ngAfterViewInit() {
    if (this.usePagination) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.useSorting) {
      this.dataSource.sort = this.sort;
    }
  }

  onRowClicked(row: any) {
    this.rowClick.emit(row);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
  masterToggle() {}

  isAllSelected() {}
  toggleRow(row: any) {}
}
