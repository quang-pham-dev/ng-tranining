import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthGuard } from '../shared/guards/permission-guards/is-auth.guard';
import { IsAccessGuard } from '../shared/guards/permission-guards/is-access.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: './auth-root/auth-root.module#AuthRootModule',
        canDeactivate: [
          IsAuthGuard
        ]
      },
      {
        path: 'app',
        loadChildren: './app-root/app-root.module#AppRootModule',
        canActivate: [
          IsAccessGuard
        ],
        canDeactivate: [
          IsAccessGuard
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
