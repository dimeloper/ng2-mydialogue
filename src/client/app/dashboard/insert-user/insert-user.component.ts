import { Component } from '@angular/core';
import { User } from '../../models/user';
import { RegisterService } from '../../services/register.service';

/**
*	This class represents the lazy loaded InsertUserComponent.
*/

interface Role {
	label : string;
	value : string;
}

@Component({
    moduleId: module.id,
    selector: 'insert-user-cmp',
    templateUrl: 'insert-user.component.html'
})

export class InsertUserComponent {
    newUser: User = new User();
    registered: boolean = false;
		offices: string[] = ['Hamburg'];
    teams: string[] = ['Website', 'HR', 'Games', 'BISON', 'Finance']
		roles: Role[] = [
			{label : 'Employee', value : 'USER'},
			{label : 'Team Lead', value : 'TEAM_LEAD'}
		];

    constructor(private registerService: RegisterService) {
			this.newUser.office = this.offices[0];
			this.newUser.role = this.roles[0].value;
      this.newUser.team = this.teams[0];
		}

    onSubmit() {
        this.registerService.sendUser(this.newUser)
            .subscribe(
            data => {
                this.registered = true;
                this.newUser = new User();
            },
            error => console.log(error)
            );
    }
}
