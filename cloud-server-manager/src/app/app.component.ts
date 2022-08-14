import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  isValidated!: boolean;

  ngOnInit() {
    this.auth.validateToken();
  }

  onlogout(){
    this.router.navigate(["/login"]);
    this.auth.token = false;
  }

  isLogged(){
    this.isValidated = this.auth.token;
    return this.isValidated;
  }

}
