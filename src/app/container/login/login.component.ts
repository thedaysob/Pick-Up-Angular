import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LogInService } from '../../service/log-in.service';
import { User, UserInfo } from '../../model/user';
import { UUID } from 'angular2-uuid';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username : string;
  password : string;

  newUsername : string;
  newPassword : string;
  confirmPassword : string;
  age : number;
  email : string;

  newUser : boolean;

  message : string;
  errorMessage : string;

  userInfo : UserInfo;

  constructor(private logInService : LogInService, private router: Router) 
  { }

  ngOnInit() {
    this.newUser = false;
  }

  login() {
    this.logInService.getUser(this.username, this.password).subscribe((response)=> {
      if (!response.status) {
        this.userInfo = response;
        console.log(this.userInfo);
        this.router.navigate(['main-container']);
      } else {
        console.log("username and password");
        this.message = "Username and password did not match.";
      }
    }, (err)=>{
      console.log(err);
    });
  }

  createNewUserWindow() {
    this.newUser = true;
  }

  createNewUser() {
    if (this.newPassword == this.confirmPassword) {
      let uuid = UUID.UUID();
      let currUser = new User(this.newUsername, this.newPassword, uuid, this.age, this.email);
      this.logInService.createNewUser(currUser).subscribe((response)=>{
        console.log(response);
      }, (error)=>{
        console.log(error);
      });
    } else {
      this.errorMessage = "Password does not match Confirm Password";
    }
    this.newUser = false;
  }
}
