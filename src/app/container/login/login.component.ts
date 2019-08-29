import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../service/log-in.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  newUser : boolean;

  newUsername : string;
  newPassword : string;
  confirmPassword : string;
  age : number;
  email : string;

  constructor() { }

  ngOnInit() {
    this.newUser = false;
  }

  login() {
    console.log(this.username);
    console.log(this.password);
  }

  createNewUser() {
    this.newUser = true;
  }
}
