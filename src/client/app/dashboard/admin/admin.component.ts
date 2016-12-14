import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

import { Router } from '@angular/router';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'admin-cmp',
	templateUrl: 'admin.component.html'
})

export class AdminComponent {
	users: User[];

	constructor(private userService: UserService) {
		this.userService.getUsers().subscribe(
				data => {
						this.users = data.json();
				},
				error => console.log(error)
		);
	}
}
