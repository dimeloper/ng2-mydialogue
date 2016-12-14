import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertUserComponent } from './insert-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule],
    declarations: [InsertUserComponent],
    exports: [InsertUserComponent]
})

export class InsertUserModule { }
