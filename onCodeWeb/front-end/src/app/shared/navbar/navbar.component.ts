import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/database/services/useri-info.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  ngOnInit(): void {
    this.getUserInfo()
  }
  userInfo: any;
  constructor (
    private userInfoService: UserInfoService
  ) {}

  getUserInfo() {
    this.userInfoService.getUserInfo().subscribe(
      (data) => {
        console.log(data)
        this.userInfo = data.usuario
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
