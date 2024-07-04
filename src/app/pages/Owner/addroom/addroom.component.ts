import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {
public stagiairelists:any;
public chambre:any={
  nomChambre: '',
  adresse: '',
  ville: '',
  description: '',
  lienCarte: '',
  lienVideo: '',
  categorie: '',
  nbrAdulte: 0,
  nbrEnfant:0,
  prix: 0,
  images:null,
};
  constructor(private appservice:ApiServiceService,public router:Router) { }

  ngOnInit(): void {
  }
  
  addchambre(){
    this.appservice.AddChambre(this.chambre).subscribe((result)=>{
      console.warn()
  
    })
  }

}
