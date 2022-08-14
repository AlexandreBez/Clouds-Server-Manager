import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public servers = this.serversService.getServers();
  confirmDelete!: boolean;
  showDeletePanel: boolean = false;
  success: boolean = false;

  constructor(
    private serversService: ServersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCreateServer(){
    this.router.navigate(['/servers/create-server']);
  }

  onRemoveServer(){
    this.serversService.deleteServer();
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
