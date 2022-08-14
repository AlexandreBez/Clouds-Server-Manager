import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {

  constructor(
    private serversService: ServersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  id:number = Math.floor(Math.random() * (100000 - 0 + 1)) + 0;

  onCreateServer(serverName: string, serverStatus: string){
    if(serverName === ""){
      alert("Server name can't be empty");
    }else{
      this.serversService.createServer(this.id, serverName, serverStatus);
      this.router.navigate(["/servers"]);
    }
  }

  onCancelServerCreation(){
    this.router.navigate(["/servers"]);
  }
}
