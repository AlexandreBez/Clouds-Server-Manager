import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { ErrorPageComponent } from './error-page/error-page.component';

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
    component: ServersComponent
  },

  {
    path: 'editServer',
    component: EditServerComponent
  },

  {
    path: 'users',
    component: UsersComponent
  },

  {
    path: 'editUser',
    component: EditUserComponent
  },

  { 
    path: 'notFound', 
    component: ErrorPageComponent,
    data: {
      message: 'Page not found!'
    }
  },

  { 
    path: '**', 
    redirectTo: '/not-found' 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
