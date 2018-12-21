import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  symbol: string;
  population: number,
  area: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ukraine', symbol: 'UA', population: 44.291, area: 603628},
  {position: 2, name: 'Ukraine', symbol: 'UA', population: 44.291, area: 603628},
  {position: 3, name: 'Ukraine', symbol: 'UA', population: 44.291, area: 603628},
  {position: 4, name: 'Ukraine', symbol: 'UA', population: 44.291, area: 603628},
  {position: 5, name: 'Ukraine', symbol: 'UA', population: 44.291, area: 603628},
  {position: 6, name: 'Ukraine', symbol: 'UA', population: 44.291, area: 603628},
  {position: 7, name: 'Ukraine', symbol: 'UA', population: 44.291, area: 603628},
  {position: 8, name: 'Ukraine', symbol: 'UA', population: 44.291, area: 603628},
  {position: 9, name: 'Ukraine', symbol: 'UA', population: 44.291, area: 603628},
  {position: 10, name: 'Ukraine', symbol: 'UA', population: 44.291, area: 603628},
];

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.scss']
})
export class TablelistComponent {
  displayedColumns: string[] = ['position', 'name', 'symbol', 'population', 'area'];
  dataSource = ELEMENT_DATA;
}
