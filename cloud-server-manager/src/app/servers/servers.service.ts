export class ServersService{

    servers = [{
        id: 1,
        serverName: "SQL",
        status: "Online"
    }];

    createServer(id: number, serverName: string, status: string){
        this.servers.push({id, serverName, status});
    }

    getServers(){
        return this.servers;
    }

    deleteServer(){
        this.servers.pop();
    }
}