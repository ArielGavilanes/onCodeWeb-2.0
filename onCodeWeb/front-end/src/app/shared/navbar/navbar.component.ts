import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/database/services/user-info.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  info: any;


  ngOnInit(): void {  
    this.getInfo()
  }
  constructor (

    private userInfoService: UserInfoService
    ) {}

    getInfo() {
      this.userInfoService.getInfo().subscribe(
        (res) => 
        {
          console.log(res)
          this.info = res
        },
        (err) => console.log(err),
      )
    }
  }