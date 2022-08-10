import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  users?: {id: number, name: string, role: string};

  userId!: number;
  userName!: string;
  role!: string;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    this.route.fragment.subscribe();
    let id  = +this.route.snapshot.params['id'];
    this.users = this.usersService.getUserById(id);
  }

  onUpdateUser() {
    this.usersService.updateUser(this.userId, {name: this.userName, role: this.role});
    this.router.navigate(['users']);
  }

}
