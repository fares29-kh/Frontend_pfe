import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Reservation, image } from 'src/app/models/reservation';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ImagesService } from 'src/app/services/images.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  public RoomLists: any;
  searchText: any;
  userId !: string
  display: string = "none"
  roomId!: number
  showModal: boolean = false
  reservationObject: Reservation = new Reservation();
  images: image[] = []
  constructor(private appservice: ApiServiceService,
    private router: Router, private reservationService: ReservationService,
    private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.getallrooms();
    const decoded_token: any = jwtDecode(this.getCookie("token"));
    this.userId = decoded_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
  }
  // getallrooms() {
  //   this.appservice.GetAllChambre().subscribe(
  //     (result: any) => {
  //       this.RoomLists = [];
  //       let i = 0
  //       result?.forEach((el: any) => {
  //         let model: any
  //         model = el
  //         this.imagesService.getImagesByChambreId(el.id).subscribe(
  //           data => {
  //             console.log("images ==> ", data)
  //             model.images = data
  //             this.RoomLists[i] = model
  //             i++
  //           }
  //         )
  //       })
  //       console.log(result);
  //     })
  // }
  getallrooms() {
    this.appservice.GetAllChambre().subscribe(
      (result: any) => {
        this.RoomLists = [];
        let i = 0;
        result?.forEach((el: any) => {
          let model: any;
          model = el;
          this.imagesService.getImagesByChambreId(el.id).subscribe(
            data => {
              console.log("images ==> ", data);
              if (data.length > 0) {
                model.images = [data[0]]; 
              } else {
                model.images = []; 
              }
              this.RoomLists[i] = model;
              i++;
            }
          );
        });
        console.log(result);
      }
    );
  }
  
  openModal(id: number) {
    this.display = "block";
    this.roomId = id
  }
  onCloseHandled() {
    this.display = "none";
  }
  submit() {
    this.reservationObject.chambreId = this.roomId
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
