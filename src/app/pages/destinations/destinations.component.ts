import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destination } from 'src/app/models/reservation';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
public Destinationlists:any;
display: string = "none"
showModal: boolean = false
commentaireObject : Destination = new Destination();
  constructor(private appservice:ApiServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getalldestinations();
  }
getalldestinations(){
  this.appservice.GetAllDestinations().subscribe(
    (result:any)=>{
      this.Destinationlists=result;
      console.log(result);
    }
  )
}
submit() {
 
  this.appservice.AddCommentaire(this.commentaireObject).subscribe(
    ()=>{
      this.getalldestinations();
    }
  )
}
openModal(id: number) {
  this.display = "block";
  //this.roomId = id
}
onCloseHandled() {
  this.display = "none";
}

}
