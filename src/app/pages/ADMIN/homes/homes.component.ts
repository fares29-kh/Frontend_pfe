import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {
public homelists:any;
  constructor(private appservice:ApiServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getallhouses();
  }
getallhouses(){
  this.appservice.GetAllHouses().subscribe(
    (result:any)=>{
      this.homelists=result;
      console.log(result);
    }
  )
}


deletemaison(data:any){

  this.appservice.DeleteMaison(data).subscribe(
    ()=>{
      this.getallhouses();
    }
   );
}
}

