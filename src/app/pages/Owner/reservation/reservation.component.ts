import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ReservationService } from 'src/app/services/reservation.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  userId !: string
  public  reservationlists:any;
  constructor(private appservice: ReservationService, private router: Router) { }

  ngOnInit(): void {
    const decoded_token: any = jwtDecode(this.getCookie("token"));
      this.userId = decoded_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
      console.log(this.userId)
      this.getresbyid(this.userId);
      console.log(this.reservationlists);
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
  getresbyid(id:any){
    this.appservice.getOwnerReservation(id).subscribe((result: any) => {
      this.reservationlists = result;
      console.log(result);
    })
  }

  deletereservation(data:any){
  
    this.appservice.deleteReservation(data).subscribe(
      ()=>{
        this.getresbyid(this.userId);
      }
     );
}
}
