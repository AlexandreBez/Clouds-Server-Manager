export class ServerService{

    private servers = [
        {
        id: 1,
        name: 'Production - UAT32',
        status: 'online'
        },
        {
        id: 2,
        name: 'QA - UAT26',
        status: 'offline'
        },
        {
        id: 3,
        name: 'Developer - UAT56',
        status: 'unknow'
        }
    ];

    // load server list
    getservers(){
        return this.servers;
    }

    // get server by id
    getServerById(id: number){
        const server = this.servers.find(
            (s) => {
                return s.id === id;
            }
        );
        return server;
    }

    // create server
    createServer(){
        this.servers.push();
    }

    // get server by id and update
    updateServer(id: number, serverInfo: {name: string, status: string}) {
        const server = this.servers.find(
          (s) => {
            return s.id === id;
          }
        );
        
        if (server) {
          server.name = serverInfo.name;
          server.status = serverInfo.status;
        }
    }

    // get server by id and update
    removeServer() {
        this.servers.pop();
    }

}