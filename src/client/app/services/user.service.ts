import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {
    users: User[];

    private currentUser: User;

    constructor(private http: Http) { }

    getUsers() {
      let usersUrl = "http://localhost:8080/rest/user/users";
      let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
      return this.http.post(usersUrl, { headers: headers });
    }

    getUserById(id: string) {
    }

    getUserByEmail(email: string) {
        let emailUrl = "http://localhost:8080/rest/user/email";
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(emailUrl, email, { headers: headers });
    }

    updateUser(user: User) {
        let userUrl = "http://localhost:8080/rest/user/update";
        let headers1 = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(userUrl, JSON.stringify(user), { headers: headers1 });
    }

    setCurrentUser(user: User): void {
        this.currentUser = user;
    }

    getCurrentUser(): User {
        return this.currentUser;
    }
}
