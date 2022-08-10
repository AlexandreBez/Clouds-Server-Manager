import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server?: {id: number, name: string, status: string};

  serverId!: number;
  serverName!: string;
  status!: string;

  constructor(
    private serverService: ServerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.fragment.subscribe();
    let id  = +this.route.snapshot.params['id'];
    this.server = this.serverService.getServerById(id);
  }

  onUpdateServer() {
    this.serverService.updateServer(this.serverId, {name: this.serverName, status: this.status});
    this.router.navigate(['servers']);
  }
}
