import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
public chambreslists:any;

public chambre:any={
  nomMaison: '',
  adresse: '',
  ville: '',
  description: '',
  lienCarte: '',
  lienVideo: '',
  categorie: '',
  nbrAdulte: 0,
  nbrEnfant:0,
  prix: 0,
};
  constructor(private appservice:ApiServiceService,private router:Router ) { }


  ngOnInit(): void {
    this.getallrooms();
  }
  getallrooms(){
    this.appservice.GetAllChambre().subscribe(
    (  result:any )=>{
        this.chambreslists=result;
        console.log(result);
    
  })
  }
  deleteroom(data:any){

      this.appservice.DeleteChambre(data).subscribe(
        ()=>{
          this.getallrooms();
        }
       );
  }
}