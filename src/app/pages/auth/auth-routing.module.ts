import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthGuard, AuthGuard } from '@app/guards';


const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
        canActivate: [UnauthGuard]
    },
    {
        path: 'registration',
        loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule),
        canActivate: [UnauthGuard]
    },
    {
        path: 'email-confirm',
        loadChildren: () => import('./pages/email-confirm/email-confirm.module').then(m => m.EmailConfirmModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
