import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modelVal = {id: 1, name: 'archana'};
  columnSchema = {
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
      align: 'left',
      hide: false,
      order: 2,
      mergeHeader: 'Merger 1'
    },
    progress: {
      name: 'Progress',
      width: '25%',
      align: 'right',
      hide: true,
      order: 1
    },
    color: {
      name: 'Color',
      width: '10%',
      align: 'left',
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
}
