import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Commentaire, Reservation, image } from 'src/app/models/reservation';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ImagesService } from 'src/app/services/images.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-housedetails',
  templateUrl: './housedetails.component.html',
  styleUrls: ['./housedetails.component.css']
})
export class HousedetailsComponent implements OnInit {
  IdMaison:any
  public  houselists:any;
  userId !: string
  ActualDate :Date = new Date();
  commentairelists:any
  display: string = "none"
  showModal: boolean = false
  images: image[] = []
 commentaireObject : Commentaire = new Commentaire();
 reservationObject: Reservation = new Reservation();
  constructor(private activateRoute:ActivatedRoute,
    private appservice: ApiServiceService, 
    private router:Router,
    private reservationService: ReservationService, private imagesService: ImagesService) { }



  ngOnInit(): void {
    const decoded_token: any = jwtDecode(this.getCookie("token"));
    this.userId = decoded_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
    this.IdMaison = this.activateRoute.snapshot.paramMap.get('id');
    this.getHouseById(this.IdMaison);
console.log(this.houselists)
    this.getcommentairebymaisonid(this.IdMaison);
  }
  getHouseById(id:any) {
    this.appservice.Getmaisonbyid(id).subscribe(
      (result: any) => {
        let model: any = result;
        this.imagesService.getImagesByMaisonId(id).subscribe(
          data => {
            console.log("images ==> ", data);
            model.images = data
            this.houselists =model
          }
        );
        console.log(result);
      }
    );
  }


  getCookie(name: string): string {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return '';
  }


  submit() {
    this.commentaireObject.maisonId = this.IdMaison
    this.commentaireObject.userId = this.userId
    this.commentaireObject.date = this.ActualDate
    this.appservice.AddCommentaire(this.commentaireObject).subscribe(
      ()=>{
        this.getcommentairebymaisonid(this.IdMaison);
      }
    )}

    getcommentairebymaisonid(id:any){
      this.appservice.GetCommentairebyidHouse(id).subscribe((result: any) => {
        this.commentairelists = result;
      
      })
    }

    openModal(id: number) {
      this.display = "block";
      //this.roomId = id
    }
    onCloseHandled() {
      this.display = "none";
    }
    submitbook() {
      this.reservationObject.maisonId = this.IdMaison
      this.reservationObject.userId = this.userId
      this.reservationService.addReservation(this.reservationObject).subscribe(
        data => {
          this.onCloseHandled();
        }
      )
    }
  }
