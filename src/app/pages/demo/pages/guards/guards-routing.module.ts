import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, RoleGuard, Roles, UnauthGuard } from '@app/guards';

import { GuardsComponent } from './guards.component';
import { AuthComponent } from './components/auth/auth.component';
import { UnauthComponent } from './components/unauth/unauth.component';
import { RoleComponent } from './components/role/role.component';


const routes: Routes = [
    {
        path: '',
        component: GuardsComponent,
        // canActivateChild: [AuthGuard],
        children: [
            {
                path: 'auth',
                component: AuthComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'unauth',
                component: UnauthComponent,
                canActivate: [UnauthGuard]
            },
            {
                path: 'role',
                component: RoleComponent,
                canActivate: [AuthGuard, RoleGuard],
                data: { roles: [Roles.Recruiter] }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuardsRoutingModule { }
