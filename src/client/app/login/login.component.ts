import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, Credentials } from '../services/login.service';

/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
		moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: 'login.component.html',
    styleUrls: ['login.css']
})

export class LoginComponent {
    private model: Credentials = { 'email': '', 'password': '' };
    private currentEmail: string;

    constructor(private loginService: LoginService, private router: Router) {
        this.currentEmail = localStorage.getItem('currentEmail');
    }

    onSubmit() {
        this.loginService.sendCredential(this.model).subscribe(
            data => {
                localStorage.setItem('token', JSON.parse(JSON.stringify(data))._body);
                this.loginService.sendToken(localStorage.getItem('token')).subscribe(
                    data => {
                        this.currentEmail = this.model.email;
                        localStorage.setItem('currentEmail', this.model.email);
                        this.model.email = '';
                        this.model.password = '';

												this.router.navigate(['/dashboard', 'home']);
                    },
                    error => console.log(error)
                );
            },
            error => console.log(error)
        );

    }
}
