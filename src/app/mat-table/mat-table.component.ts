import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

const columnSchema = {
  id: {
    name: 'ID',
    width: '2%',
    align: 'right',
    hide: false,
    order: 1,
    mergeHeader: 'Merger 1',
    colSpan: 2
  },
  name: {
    name: 'Name',
    width: '25%',
    align: 'right',
    hide: false,
    order: 2,
    mergeHeader: 'Merger 1'
  },
  progress: {
    name: 'Progress',
    width: '25%',
    align: 'left',
    hide: true,
    order: 1
  },
  color: {
    name: 'Color',
    width: '10%',
    align: 'right',
    hide: true,
    order: 10
  },
  blank: {
    name: '-',
    width: '10%',
    align: 'right',
    hide: true,
    order: 40
  }
};

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-mat-table',
  styleUrls: ['mat-table.component.css'],
  templateUrl: 'mat-table.component.html',
})
export class MatTableComponent implements OnInit {
  displayedColumns: string[] = this.getDisplayedColumns();
  dataSource: MatTableDataSource<{}>;
  columnSchema: {};

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    this.columnSchema = columnSchema;
  }

  getDisplayedColumns() {
    const list = [];
    const columns = Object.keys(columnSchema);

    columns.forEach((columnName) => {
      const columnObj = columnSchema[columnName];
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

  getTextAlignCSSClass(align: string) {
    if (!align || align === 'center') {
      return 'text-align-center';
    }
    return align === 'right' ? 'text-align-right' : 'text-align-left';
  }

  getColumnWidth(width) {
    return width ? width : '25%';
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
