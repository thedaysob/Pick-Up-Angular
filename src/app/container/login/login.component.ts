import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../service/log-in.service';
import { User } from '../../model/user';
import { UUID } from 'angular2-uuid';

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


  constructor(private logInService : LogInService) { }

  ngOnInit() {
    this.newUser = false;
  }

  login() {
    console.log(this.username);
    console.log(this.password);
    this.logInService.getUser(this.username, this.password).subscribe((response)=> {
      console.log(response);
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

    }
  }
}
