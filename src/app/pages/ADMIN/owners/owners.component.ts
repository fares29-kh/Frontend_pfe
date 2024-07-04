import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  public ownerlists:any;
  constructor(private appservice:ApiServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getAllOwners();
  }
getAllOwners(){
  this.appservice.GetAllOwners().subscribe(
    (result:any)=>{
      this.ownerlists=result;
      console.log(result);
    }
  )
}
deleteuser(data: any) {
  this.appservice.DeleteUser(data).subscribe(
    () => {
      this.getAllOwners();
    }
  );
}
}
