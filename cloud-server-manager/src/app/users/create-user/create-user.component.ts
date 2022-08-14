import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(){
  }

  success: boolean = false;

  id:number = Math.floor(Math.random() * (100000 - 0 + 1)) + 0;

  onCreateUser(user: string, role: string){
    if(user === ""){
      alert("Username can't be empty");
    }else{
      this.usersService.createUser(this.id, user, role);
      this.router.navigate(["/users"]);
      setTimeout(
        () => {
          this.success = true;

          setTimeout(
            () => {
              this.success = false;
            }, 4000
          )

        }, 80 
      )
    }
  }

  onCancelUserCreation(){
    this.router.navigate(["/users"]);
  }

}
