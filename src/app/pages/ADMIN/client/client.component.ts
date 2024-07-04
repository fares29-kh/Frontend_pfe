import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public Userslists:any;
  constructor(private appservice:ApiServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getallusers();
  }
getallusers(){
  this.appservice.GetAllUsers().subscribe(
    (result:any)=>{
      this.Userslists=result;
      console.log(result);
    }
  )
}
deleteuser(data: any) {
  this.appservice.DeleteUser(data).subscribe(
    () => {
      this.getallusers();
    }
  );
}
}
