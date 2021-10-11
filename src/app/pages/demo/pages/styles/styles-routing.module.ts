import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StylesComponent } from './styles.component';


const routes: Routes = [
    {
        path: '',
        component: StylesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StylesRoutingModule { }
