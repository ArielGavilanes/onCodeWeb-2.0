import { Injectable } from '@angular/core';
import { RolesService } from 'src/app/database/services/roles.service';
import { Roles } from 'src/app/database/interfaces/roles.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  roles: Roles[] = []

  constructor(private rolesService: RolesService) { 
    this.getRoles()
  }

    getRoles(): void {
    this.rolesService.getRoles().subscribe(roles => {
        this.roles = roles;
    });
}
}
