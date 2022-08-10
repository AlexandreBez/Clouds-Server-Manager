export class UsersService{

    private users = [
        {
          id: 1,
          name: 'Max',
          role: 'Developer'
        },
        {
          id: 2,
          name: 'Anna',
          role: 'QA'
        },
        {
          id: 3,
          name: 'Chris',
          role: 'Admin'
        }
    ];

    // load user list
    getUsers(){
        return this.users;
    }

    // get user by id
    getUserById(id: number){
        const user = this.users.find(
            (s) => {
                return s.id === id;
            }
        );
        return user;
    }

    // create user
    createUser(){
        this.users.push();
    }

    // get user by id and update
    updateUser(id: number, userInfo: {name: string, role: string}) {
        const user = this.users.find(
          (u) => {
            return u.id === id;
          }
        );
        
        if (user) {
          user.name = userInfo.name;
          user.role = userInfo.role;
        }
    }

    // delete user 
    removeUser() {
        this.users.pop();
    }

}