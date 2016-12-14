import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    declarations: [AdminComponent],
    exports: [AdminComponent]
})

export class AdminModule { }
