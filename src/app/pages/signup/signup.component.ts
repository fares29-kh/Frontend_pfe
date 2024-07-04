import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
UserLists :any={
  email:'',
  username:'',
  phoneNumber:'',
  role:'',
  password:'',
};
  constructor(private appservice:ApiServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  getUserFromData(){
    this.appservice.registeruser(this.UserLists).subscribe((result)=>{
      console.warn(),
      this.router.navigate(['']);
    })
  }

}
