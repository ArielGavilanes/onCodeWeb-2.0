import { Injectable } from '@angular/core';
import { RolesService } from 'src/app/database/services/roles.service';
import { ResponseRoles, Roles } from 'src/app/database/interfaces/roles.interface';
import { Observable, map, retry, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  roles: ResponseRoles = { roles: [] };

  constructor(private rolesService: RolesService) { 
    this.getRoles()
  }

  getRoles(): Observable<ResponseRoles>  {
    return this.rolesService.getRoles().pipe(
      tap(response => {
        this.roles = response;
      }),
    );
  }
}
  
