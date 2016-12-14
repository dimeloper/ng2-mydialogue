import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertUserComponent } from './insert-user.component';
import { RouterModule } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [InsertUserComponent],
    exports: [InsertUserComponent],
    providers: [RegisterService]
})

export class InsertUserModule { }
