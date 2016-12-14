import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.html'
})

export class SidebarComponent {
    showMenu: string = '';
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    myLocalStorage: any;
    currentEmail: string;
    currentUser: User;
    currentName: string;
		isAdmin: boolean = false;

		homeUrl: string = '/dashboard/home';

    constructor(private loginService: LoginService,
        private userService: UserService, private router: Router) {

        this.myLocalStorage = localStorage;
        this.currentEmail = localStorage.getItem('currentEmail');
        this.userService.getUserByEmail(this.currentEmail).subscribe(
            data => {
                this.currentUser = data.json();
                this.userService.setCurrentUser(this.currentUser);
                if (this.currentUser.role === "TEAM_LEAD" || this.currentUser.role === "ADMIN") {
										this.homeUrl = '/dashboard/admin';
										this.isAdmin = true;
										this.router.navigate(['/dashboard', 'admin']);
                }
								this.currentName = this.currentUser.firstName + ' ' + this.currentUser.lastName;
            },
            error => console.log(error)
        );
    }

    onClick() {
        if (this.loginService.checkLogin()) {
            this.loginService.logout();
        }
    }

}
