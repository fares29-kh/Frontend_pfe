import { Component, OnInit } from '@angular/core';
import { Chart, ChartItem, registerables } from 'chart.js';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-piachart',
  templateUrl: './piachart.component.html',
  styleUrls: ['./piachart.component.scss'],
})
export class PiachartComponent implements OnInit {
  constructor(private apiservice:ApiServiceService) {}
  public info: Array<number> = [];
  ngOnInit(): void {
   this.getarraystat();
  }

  createChart(): void {
    Chart.register(...registerables);
    const data = {
      labels: [
        'Owners',
        'clients'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [this.info[0],this.info[1]],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    const config:any = {
      type: 'doughnut',
      data: data,
    };


    const chartItem: ChartItem = document.getElementById(
      'my-chart'
    ) as ChartItem;
    new Chart(chartItem, config);
  }
  getarraystat(){
    this.apiservice.GetUserstat().subscribe(
      (result:any)=>{
  
  this.info=result;
  console.log(result);
  
  this.createChart();
      }
    )
  }
}
