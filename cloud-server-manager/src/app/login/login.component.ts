import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  alert:boolean = false;

  alertTimeout(){

      setTimeout(
          () => {

            this.alert = true;

            setTimeout(
              () => {
                this.alert = false;
              }, 4000
            )

          }, 100
      );
  }

  constructor(
    private router: Router,
    private token: AuthService
  ) {}

  onClickLogin(email: string, password: string){
    if(email === 'teste' && password === '123'){
      this.router.navigate(["/"]);
      this.token.token = true;
    }else{
      this.alertTimeout();
    };
  }

}
