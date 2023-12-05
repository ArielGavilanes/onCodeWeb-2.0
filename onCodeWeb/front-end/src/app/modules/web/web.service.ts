import { Injectable } from '@angular/core';
import { UserInfoService } from 'src/app/database/services/useri-info.service';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(
    private userInfoService: UserInfoService
  ) { }

  getUserInfo() {
    this.userInfoService.getUserInfo()
  }
}
