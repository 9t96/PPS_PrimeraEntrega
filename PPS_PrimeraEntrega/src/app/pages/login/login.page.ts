import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../services/auth-service.service'


class User{
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  user: User;

  constructor(private authService: AuthServiceService) { 
    this.user = new User();
  }

  ngOnInit() {
  }


  Login(){
    this.authService.SignIn(this.user.email, this.user.password).then( res =>{
      console.log(res);
    })
    .catch( err =>{
      console.log(err);
    })
  }

}
