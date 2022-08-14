import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: boolean = false;

  constructor(
    private router: Router
  ) { }

  validateToken(){

    if(this.token === false){
      this.router.navigate(["login"]);
    }

  }
}
