import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

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

	constructor(private loginService: LoginService) {
			this.myLocalStorage = localStorage;
			this.currentEmail = this.myLocalStorage.getItem('currentEmail');
	}

	onClick() {
			if (this.loginService.checkLogin()) {
					this.loginService.logout();
			}
	}

}
