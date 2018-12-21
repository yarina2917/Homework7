import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  // first, line

  public chartType1: string = 'line';
  public chartDatasets1: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 44], label: 'First dataset' },
  ];
  public chartLabels1: Array<any> = ['USA', 'China', 'Denmark', 'Japan', 'Spain', 'England', 'India'];
  public chartColors1: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
  ];

  // second, multiply line

  public chartDatasets2: Array<any> = [
    { data: [55, 69, 70, 51, 76, 44, 55], label: 'First dataset' },
    { data: [77, 50, 44, 70, 79, 81, 60], label: 'Second dataset' },
  ];
  public chartLabels2: Array<any> = ['Italy', 'Poland', 'Hungary', 'Ukraine', 'Germany', 'France', 'Bulgaria'];
  public chartColors2: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(58, 111, 196, .2)',
      borderColor: 'rgba(34, 81, 160, .7)',
      borderWidth: 2,
    },
  ];

  // third, bar

  public chartType3: string = 'bar';
  public chartColors3: Array<any> = [
    {
      backgroundColor: [
        'rgba(105, 0, 132, .2)',
        'rgba(105, 0, 132, .2)',
        'rgba(105, 0, 132, .2)',
        'rgba(105, 0, 132, .2)',
        'rgba(105, 0, 132, .2)',
        'rgba(105, 0, 132, .2)',
        'rgba(105, 0, 132, .2)'
      ],
      borderColor: [
        'rgba(200, 99, 132, .7)',
        'rgba(200, 99, 132, .7)',
        'rgba(200, 99, 132, .7)',
        'rgba(200, 99, 132, .7)',
        'rgba(200, 99, 132, .7)',
        'rgba(200, 99, 132, .7)',
        'rgba(200, 99, 132, .7)'
      ],
      borderWidth: 2,
    }
  ];

  public chartDatasets3: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 44], label: 'Third dataset' }
  ];
  public chartLabels3: Array<any> = ['USA', 'China', 'Denmark', 'Japan', 'Spain', 'England', 'India'];

  // fourth, horizontal bar

  public chartType4: string = 'horizontalBar';
  public chartDatasets4: Array<any> = [
    { data: [77, 50, 44, 70, 79, 81, 60], label: 'Fourth dataset' }
  ];
  public chartLabels4: Array<any> = ['Italy', 'Poland', 'Hungary', 'Ukraine', 'Germany', 'France', 'Bulgaria'];

  // general

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
