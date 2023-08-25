import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, startWith, switchMap, catchError, map, of } from 'rxjs';
import { UserService } from '../user.service';

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'created',
    'state',
    'number',
    'title',
    'action',
  ];

  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public gridData: any[] = [
    {
      ProductID: 1,
      ProductName: 'Chai',
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages',
      },
    },
    {
      ProductID: 2,
      ProductName: 'butter',
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages',
      },
    },
    {
      ProductID: 3,
      ProductName: 'Chai',
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages',
      },
    },
  ];

  constructor(private userSrv: UserService) {}

  ngOnInit(): void {}

  editHandler(row: any) {
    console.log(row);
  }

  cancelHandler(row: any) {
    console.log(row);
  }

  saveHandler(row: any) {
    console.log(row);
  }

  removeHandler(row: any) {
    let rowToRemove = row.dataItem;

    const removedData = this.gridData.filter(
      (item) => item.ProductID !== rowToRemove.ProductID
    );

    /// reove api return from service 

    this.gridData = removedData;
  }

  addHandler(row: any) {
    console.log(row);
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    this.userSrv
      .getRepoIssues(
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex
      )
      .subscribe({
        next: (result: GithubApi) => {
          this.resultsLength = result.total_count;
          this.data = result.items;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
