import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { Roles } from '../interfaces/roles.interface';

@Controller('roles')
export class RolesController {
    constructor(
        private rolesService: RolesService
    ) {}
    
    @Get('/'    )
    async getRoles(@Res() res): Promise<Roles[]> {
        const getRoles = await this.rolesService.getRoles()
        return res.status(HttpStatus.OK).json({
            roles: getRoles
        })
    }
}
