import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServersComponent } from './servers/servers.component';
import { CreateServerComponent } from './servers/create-server/create-server.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'servers',
    component: ServersComponent,
    children: [
      {
        path: 'create-server',
        component: CreateServerComponent
      }
    ]
  },

  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'create-user',
        component: CreateUserComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
