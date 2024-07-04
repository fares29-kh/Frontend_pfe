import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Commentaire, Reservation, image } from 'src/app/models/reservation';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ImagesService } from 'src/app/services/images.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})
export class RoomdetailsComponent implements OnInit {
  IdChambre:any
  public  roomlists:any;
  userId !: string
  ActualDate :Date = new Date();
  commentairelists:any
  display: string = "none"
  showModal: boolean = false
  images: image[] = []
 commentaireObject : Commentaire = new Commentaire();
 reservationObject: Reservation = new Reservation();
 ownerId !: string
  constructor(private activateRoute:ActivatedRoute,
    private appservice: ApiServiceService, 
    private router:Router,
    private reservationService: ReservationService, private imagesService: ImagesService) { }

  ngOnInit(): void {
   
   const decoded_token: any = jwtDecode(this.getCookie("token"));
    this.userId = decoded_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
    this.IdChambre = this.activateRoute.snapshot.paramMap.get('id');
    this.getRoomById(this.IdChambre);

    this.getcommentairebychambreid(this.IdChambre);

  }
  // getchambrebyid(id:any){
  //   this.appservice.GetChambrebyid(id).subscribe(
  //     (result: any) => {
  //     this.roomlists = result;
  //     let i = 0
  //    result?.forEach((el: any) => {
  //              let model: any
  //     model = el
  //          this.imagesService.getImagesByChambreId(id).subscribe(
  //               data => {
  //                  console.log("images ==> ", data)
  //                  model.images = data
              
  //                  i++
  //                }
  //              )
  //            })
  //            console.log(result);
  //          })
  //         }

  getRoomById(id:any) {
    this.appservice.GetChambrebyid(id).subscribe(
      (result: any) => {
        let model: any = result;
        this.ownerId = result.userId
        this.imagesService.getImagesByChambreId(id).subscribe(
          data => {
            console.log("images ==> ", data);
            model.images = data
            this.roomlists =model
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
    this.commentaireObject.chambreId = this.IdChambre
    this.commentaireObject.userId = this.userId
    this.commentaireObject.date = this.ActualDate
    this.appservice.AddCommentaire(this.commentaireObject).subscribe(
      ()=>{
        this.getcommentairebychambreid(this.IdChambre);
      }
    )
  }
//   getchambrebyid(id:any){
//     this.appservice.GetChambrebyid(id).subscribe(
//       (result: any) => {
//         this.roomlists = [];
// let i=0;
//       result?.forEach((el: any)=>{
//         let model: any;
//         model = el;
//         this.imagesService.getImagesByChambreId(el.id).subscribe(
//           data => {
//             console.log("images ==> ", data);
//             if (data.length > 0) {
//               model.images = [data[0]]; 
//             } else {
//               model.images = []; 
//             }
//             this.roomlists[i] = model;
//             i++;
//           }
//         );
//       });
//       console.log(result);
//     }
//   );
// }

  getcommentairebychambreid(id:any){
    this.appservice.GetCommentairebyidRoom(id).subscribe((result: any) => {
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
    this.reservationObject.chambreId = this.IdChambre
    this.reservationObject.userId = this.userId
    this.reservationService.addReservation(this.reservationObject).subscribe(
      data => {
        this.onCloseHandled();
      }
    )
  }
}
