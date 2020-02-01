import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableUtils} from './mat-table.utils';

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-mat-table',
  styleUrls: ['mat-table.component.css'],
  templateUrl: 'mat-table.component.html',
})
export class MatTableComponent implements OnInit {

  @Input()
  schema: {};

  utility: MatTableUtils;
  displayedColumns: string[];
  dataSource: MatTableDataSource<{}>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    this.utility = new MatTableUtils();
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }

  getDisplayedColumns() {
    const list = [];
    const columns = Object.keys(this.schema);

    columns.forEach((columnName) => {
      const columnObj = this.schema[columnName];
      if (columnObj.order) {
        list.push({order: columnObj.order, name: columnName});
      } else {
        list.push({order: Infinity, name: columnName});
      }
    });

    list.sort((a, b) => a.order - b.order);
    const returnList = [];
    list.forEach((v) => returnList.push(v.name));

    return returnList;
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.displayedColumns = this.getDisplayedColumns();
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): {} {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
