import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailConfirmComponent } from './email-confirm.component';

const routes: Routes = [
    {
        path: '',
        component: EmailConfirmComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmailConfirmRoutingModule { }
