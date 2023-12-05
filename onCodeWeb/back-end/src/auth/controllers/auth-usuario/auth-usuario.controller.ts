import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { error } from 'console';
import { AuthUsuarioDTO } from 'src/auth/dto/authLogin.dto';
import { AuthUsuarioService } from 'src/auth/services/auth-usuario/auth-usuario.service';

@Controller('auth')
export class AuthUsuarioController {

    constructor(
        private authUsuarioService: AuthUsuarioService
    ) { }

    @Post('login')
    async loginValidation(@Body() authUsuarioDTO: AuthUsuarioDTO): Promise<{ token: string }> {
        try {
            const token = await this.authUsuarioService.authUsuario(authUsuarioDTO);

            if (token) {
                return { token };
            } else {
                throw new UnauthorizedException('Credenciales inválidas');
            }
        } catch (error) {
            throw new UnauthorizedException('Error en el proceso de validación');
        }
    }
}


