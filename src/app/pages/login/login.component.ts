import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginLists: any = {
    email: '',
    password: '',
    rememberMe: true
  };
  showError: boolean = false
  constructor(private router: Router, private appservice: ApiServiceService) { }

  ngOnInit(): void {

  }
  login() {
    this.appservice.loginuser(this.LoginLists).subscribe(
      (data: any) => {
        var now = new Date();
        var time = now.getTime();
        if (this.LoginLists.rememberMe == true) {
          var expireTime = time + 24000 * 3600;
        } else {
          var expireTime = time + 2000 * 3600;
        }
        const token = data["token"]
        now.setTime(expireTime);
        document.cookie = "token=" + token + "; expires=" + now + ";path=/";
        const decoded_token: any = jwtDecode(token);
        const role = decoded_token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        if (role == "admin") {
          this.router.navigate(["admin"])
        } else if (role == "user") {
          this.router.navigate(["Home"])

        } else if (role == "proprietaire") {
          this.router.navigate(["Owner"])
        }
      }, er => {
        this.showError = true
      }
    )
  }

  event() {
    this.router.navigate(['register']);
  }
}
