import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serverService: ServerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.servers = this.serverService.getservers();
  }

  onEditServer(){
    this.router.navigate(['editServer']);
  }

  onRemoveServer(){
    this.serverService.removeServer();
  }
}
