import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from './resolvers';


const routes: Routes = [
    {
        path: 'new',
        loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule)
    },
    {
        path: 'edit',
        loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule),
        resolve: {
            user: UserResolver
        }
    },
    {
        path: ':id',
        loadChildren: () => import('./pages/display/display.module').then(m => m.DisplayModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
