import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPhotoComponent } from './user-photo.component';



@NgModule({
    declarations: [UserPhotoComponent],
    imports: [
        CommonModule
    ],
    exports: [
        UserPhotoComponent
    ]
})
export class UserPhotoModule { }
