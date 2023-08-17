import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css']
})
export class MyGridComponent implements OnInit, AfterViewInit {

  @Input() columns: string[];
  @Input() data: any[];
  @Input() usePagination: boolean = true;
  @Input() useSorting: boolean = true;

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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

----------

<table mat-table [dataSource]="dataSource" [matSort]="useSorting ? sort : null">

  <ng-container *ngFor="let column of displayedColumns" [matColumnDef]="column">
    <th mat-header-cell *matHeaderCellDef [mat-sort-header]="useSorting ? column : null">{{ column }}</th>
    <td mat-cell *matCellDef="let element">{{ element[column] }}</td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

</table>

<mat-paginator *ngIf="usePagination" [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>


------------

<app-my-grid 
  [columns]="['name', 'age', 'address']"
  [data]="yourDataArray"
  [usePagination]="true"
  [useSorting]="false">
</app-my-grid>


-------

import { SelectionModel } from '@angular/cdk/collections';

// ... other imports ...

export class MyGridComponent implements OnInit, AfterViewInit {

  // ... previous properties ...

  @Input() enableRowSelection: boolean = false;
  @Output() rowClick = new EventEmitter<any>();
  @Output() rowSelectionChange = new EventEmitter<SelectionModel<any>>();

  selection = new SelectionModel<any>(true, []); // For multi-selection

  // ... other methods ...

  onRowClicked(row: any) {
    this.rowClick.emit(row);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
-----------
<table mat-table [dataSource]="dataSource" [matSort]="useSorting ? sort : null">

  <!-- Checkbox Column -->
  <ng-container matColumnDef="select" *ngIf="enableRowSelection">
    <th mat-header-cell *matHeaderCellDef>
      <mat-checkbox (change)="$event ? masterToggle() : null"
                    [checked]="selection.hasValue() && isAllSelected()"
                    [indeterminate]="selection.hasValue() && !isAllSelected()">
      </mat-checkbox>
    </th>
    <td mat-cell *matCellDef="let row">
      <mat-checkbox (click)="$event.stopPropagation()"
                    (change)="$event ? toggleRow(row) : null"
                    [checked]="selection.isSelected(row)">
      </mat-checkbox>
    </td>
  </ng-container>

  <!-- Data Columns -->
  <ng-container *ngFor="let column of displayedColumns" [matColumnDef]="column">
    <th mat-header-cell *matHeaderCellDef [mat-sort-header]="useSorting ? column : null">{{ column }}</th>
    <td mat-cell *matCellDef="let element">{{ element[column] }}</td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumnsWithCheckbox"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumnsWithCheckbox;" (click)="onRowClicked(row)"></tr>

</table>

<mat-paginator *ngIf="usePagination" [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
-------
ngOnInit() {
    if (this.enableRowSelection) {
      this.displayedColumns = ['select', ...this.columns];
    } else {
      this.displayedColumns = this.columns;
    }
    // ... rest of the code
  }

  ---------

  <app-my-grid 
  [columns]="['name', 'age', 'address']"
  [data]="yourDataArray"
  [enableRowSelection]="true"
  (rowClick)="handleRowClick($event)"
  (rowSelectionChange)="handleRowSelectionChange($event)">
</app-my-grid>

----------
