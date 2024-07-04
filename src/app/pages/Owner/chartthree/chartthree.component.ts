import { Component, OnInit } from '@angular/core';
import { Chart, ChartItem, registerables } from 'chart.js';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-chartthree',
  templateUrl: './chartthree.component.html',
  styleUrls: ['./chartthree.component.css']
})
export class ChartthreeComponent implements OnInit {
  public info: Array<number> = [];
  nbrRoom:any;
  public nbrHouse!: number;
  constructor( private apiservice:ApiServiceService) { }

  ngOnInit(): void {
this.getarraystat();


  }
  createChart(): void{
    Chart.register(...registerables);
    const data = {
      labels: [
        'House',
        'Room'
      ],
      datasets: [{
        label: 'most brands selles',
        data: [this.info[0],this.info[1]],
        backgroundColor: [
          '#A2AAAD',
          '#1428a0'
        ],
        hoverOffset: 4
      }]
    };
    const config:any = {
      type: 'pie',
      data: data,
    };
    const chartItem: ChartItem = document.getElementById(
      'my-chart-two'
    ) as ChartItem;
    new Chart(chartItem, config);
  }
getarraystat(){
  this.apiservice.Getstat().subscribe(
    (result:any)=>{

this.info=result;
console.log(result);

this.createChart();
    }
  )
}

getnbrmaison(){
  this.apiservice.Getnombremaison().subscribe(
     (result:any)=>{

 this.nbrHouse=result;

     }
  )
}

getnbrchambre(){
  this.apiservice.Getnombrechambre().subscribe(
   (result:any)=>{

 this.nbrRoom=result;

 
   }
  )
}
}
