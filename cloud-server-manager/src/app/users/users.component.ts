import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users = this.usersService.getUsers();
  confirmDelete!: boolean;
  showDeletePanel: boolean = false;
  success: boolean = false;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCreateUser(){
    this.router.navigate(['/users/create-user']);
  }

  onRemoveUser(){
    this.usersService.deleteUser();
    this.showDeletePanel = false;

    setTimeout(
      () => {
        this.success = true;

        setTimeout(
          () => {
            this.success = false;
          }, 4000
        )

      }, 10
    );
  }

  onRemoveConfirm(){
    this.showDeletePanel = true;
  }

  onCancel(){
    this.showDeletePanel = false;
  }
}
