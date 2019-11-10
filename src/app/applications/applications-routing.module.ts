import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
      }
      // {
      //   path: '',
      //   children: [
      //     {
      //       path: 'demo-crud',
      //       loadChildren: './modules/demo-crud/demo-crud.module#DemoCrudModule'
      //     },
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
