import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Reservation, image } from 'src/app/models/reservation';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ImagesService } from 'src/app/services/images.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  public Houseslists: any;
  searchText :any
  showModal: boolean = false
  display: string = "none"
  houseId!: number
  userId !: string
  images: image[] = []
  reservationObject: Reservation = new Reservation();
  constructor(private appservice: ApiServiceService,
     private router: Router,private imagesService:ImagesService,
    private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getallhouses();
    const decoded_token: any = jwtDecode(this.getCookie("token"));
    this.userId = decoded_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
  }
  openModal(id: number) {
    this.display = "block";
    this.houseId = id
  }
  onCloseHandled() {
    this.display = "none";
  }
  getallhouses() {
    this.appservice.GetAllHouses().subscribe(
      (result: any) => {
        this.Houseslists = [];
        let i = 0;
        result?.forEach((el: any) => {
          let model: any;
          model = el;
          this.imagesService.getImagesByMaisonId(el.id).subscribe(
            data => {
              console.log("images ==> ", data);
              if (data.length > 0) {
                model.images = [data[0]]; 
              } else {
                model.images = []; 
              }
              this.Houseslists[i] = model;
              i++;
            }
          );
        });
        console.log(result);
      }
    )
  }
  submit() {
    this.reservationObject.maisonId = this.houseId
    this.reservationObject.userId = this.userId
    this.reservationService.addReservation(this.reservationObject).subscribe(
      data => {
        this.onCloseHandled();
      }
    )
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
}
