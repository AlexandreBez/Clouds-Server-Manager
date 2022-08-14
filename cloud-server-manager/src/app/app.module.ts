import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CreateServerComponent } from './servers/create-server/create-server.component';
import { ServersService } from './servers/servers.service';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UsersService } from './users/user.service';
import { ListListenerDirective } from './shared/list-listener.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    LoginComponent,
    CreateServerComponent,
    UsersComponent,
    CreateUserComponent,
    ListListenerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ServersService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
