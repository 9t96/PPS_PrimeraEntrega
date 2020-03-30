import { Component, OnInit } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';


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

  constructor(private fbAuth: FirebaseAuthentication) { 
    this.user = new User();
  }

  ngOnInit() {
  }


  Login(){



    this.fbAuth.signInWithEmailAndPassword(this.user.email, this.user.password)
    .then(res =>{
      console.log(res);
    })
  }

}
