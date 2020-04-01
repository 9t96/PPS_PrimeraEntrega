import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../services/auth-service.service'
import { Router } from '@angular/router';


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

  constructor(private authService: AuthServiceService, private router: Router) { 
    this.user = new User();
  }

  ngOnInit() {
  }


  Login(){
    this.authService.SignIn(this.user.email, this.user.password).then( res =>{
      this.router.navigate(['tabs']);
    })
    .catch( err =>{
      console.log(err);
    })
  }

  testUser(accountNumber: number){
    switch (accountNumber) {
      case 1:
        this.user.email = 'admin@admin.com'
        this.user.password = 'admin666'
        break;
      case 2:
        this.user.email = 'prueba2@admin.com'
        this.user.password = 'admin666'
        break;
    }
    
  }

}
