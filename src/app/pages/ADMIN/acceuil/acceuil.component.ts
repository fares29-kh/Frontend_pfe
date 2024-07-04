import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  public info: Array<number> = [];
  public nbReservations :any;
  public nbusers :any;
  public nbcommentaire : any;
  constructor(private apiservice:ApiServiceService) { }

  ngOnInit(): void {
    this.getdata();
    this.nbReservations=this.info[0];
    this.nbusers=this.info[1];
    this.nbcommentaire=this.info[2];
    

  }
getdata(){
  this.apiservice.GetStat2().subscribe(
    (result:any)=>{

      this.info=result;
      console.log(result);
      
          }
  )
}
}
