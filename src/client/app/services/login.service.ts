import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

export interface Credentials {
    email: string;
    password: string;
};

@Injectable()
export class LoginService {
    token: string;

    constructor(private http: Http) { }

    sendCredential(model: Credentials) {
        let tokenUrl1 = 'http://localhost:8080/user/login';
        let headers1 = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(tokenUrl1, JSON.stringify(model), { headers: headers1 });
    }

    sendToken(token: string) {
        let tokenUrl2 = 'http://localhost:8080/rest/user/users';
        console.log('Bearer ' + token);

        let getHeaders = new Headers({ 'Authorization': 'Bearer ' + token });

        return this.http.get(tokenUrl2, { headers: getHeaders });
    }

    logout() {
        localStorage.setItem('token', '');
        localStorage.setItem('currentEmail', '');
        alert('You just logged out.');
    }

    checkLogin() {
        if (localStorage.getItem('currentEmail') !== null &&
            localStorage.getItem('currentEmail') !== '' &&
            localStorage.getItem('token') !== null &&
            localStorage.getItem('token') !== '') {

            console.log(localStorage.getItem('currentEmail'));
            console.log(localStorage.getItem('token'));
            return true;
        } else {
            return false;
        }
    }

}
