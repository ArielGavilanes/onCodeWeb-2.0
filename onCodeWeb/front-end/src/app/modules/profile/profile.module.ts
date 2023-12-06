import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ImgProfileComponent } from './components/img-profile/img-profile.component';
import { ContentProfileComponent } from './components/content-profile/content-profile.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ImgProfileComponent,
    ContentProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
