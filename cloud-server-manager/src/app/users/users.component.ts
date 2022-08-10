import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: {id: number, name: string, role: string}[] = [];

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(){
  }

  onEditUser(){
    this.router.navigate(['editUser']);
  }

  onRemoveServer(){
    this.userService.removeUser();
  }
}
