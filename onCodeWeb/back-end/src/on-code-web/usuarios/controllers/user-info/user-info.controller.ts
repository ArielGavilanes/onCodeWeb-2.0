import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserInfoService } from '../../services/user-info/user-info.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard/jwt-auth-guard.guard';

@Controller('perfil')
export class UserInfoController {
    constructor(private readonly userInfoService: UserInfoService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getPerfil(@Request() req): Promise<any> {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const userInfo = await this.userInfoService.getUserInfoFromToken(token);

            if (!userInfo) {
                return { mensaje: 'No se pudo obtener la información del usuario' };
            }

            return { usuario: userInfo };
        } catch (error) {
            console.error('Error al obtener información del usuario:', error.message);
            return { mensaje: 'Error al obtener información del usuario' };
        }
    }
}


