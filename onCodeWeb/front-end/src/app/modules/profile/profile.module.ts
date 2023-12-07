import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileImgComponent } from './components/profile-img/profile-img.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileImgComponent,
    ProfileContentComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
