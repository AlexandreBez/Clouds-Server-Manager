export class UsersService{

    users = [{
        id: 1,
        user: "Jhon",
        role: "Admin"
    }];

    createUser(id: number, user: string, role: string){
        this.users.push({id, user, role});
    }

    getUsers(){
        return this.users;
    }

    deleteUser(){
        this.users.pop();
    }

}