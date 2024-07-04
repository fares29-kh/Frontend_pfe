import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-addhouse',
  templateUrl: './addhouse.component.html',
  styleUrls: ['./addhouse.component.css']
})
export class AddhouseComponent implements OnInit {
public stagiairelists:any;

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
    images:null,
  };
  constructor(public appservice:ApiServiceService,public router:Router) { }

  ngOnInit(): void {
  }

  addmaison(){
    this.appservice.AddHouse(this.chambre).subscribe((result)=>{
      console.warn()
  
    })
  }
}
