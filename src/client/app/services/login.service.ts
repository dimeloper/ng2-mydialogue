import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from './user.service';

export interface Credentials {
    email: string;
    password: string;
};

@Injectable()
export class LoginService {
    token: string;

    constructor(private http: Http, private router: Router, private userService: UserService) { }

    sendCredential(model: Credentials) {
        let tokenUrl1 = 'http://localhost:8080/user/login';
        let headers1 = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(tokenUrl1, JSON.stringify(model), { headers: headers1 });
    }

    sendToken(token: string) {
        let tokenUrl2 = 'http://localhost:8080/rest/user/login/success';
        console.log('Bearer ' + token);

        let getHeaders = new Headers({ 'Authorization': 'Bearer ' + token });

        return this.http.get(tokenUrl2, { headers: getHeaders });
    }

    logout(): void {
        localStorage.setItem('token', '');
        localStorage.setItem('currentEmail', '');
        this.userService.setCurrentUser(null);
        this.router.navigate(['']);
    }

    checkLogin(): boolean {
        if (localStorage.getItem('currentEmail') !== null &&
            localStorage.getItem('currentEmail') !== '' &&
            localStorage.getItem('token') !== null &&
            localStorage.getItem('token') !== '') {

            return true;
        } else {
            return false;
        }
    }

}
