import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { error } from 'console';
import { AuthUsuarioDTO } from 'src/auth/dto/authLogin.dto';
import { AuthUsuarioService } from 'src/auth/services/auth-usuario/auth-usuario.service';

@Controller('auth')
export class AuthUsuarioController {

    constructor (
        private authUsuarioService: AuthUsuarioService
    ) {}
    
    @Post('login')
    async loginValidation(@Body() authUsuarioDTO: AuthUsuarioDTO): Promise<{token: string}> {
        
        //Validar credenciales usando authUsuario de authUsuarioService
        try {
            const usuarioValidation = await this.authUsuarioService.authUsuario(authUsuarioDTO);
            if (usuarioValidation) {
                const {
                    id_usuario,
                    id_rol
                } = usuarioValidation
                
                const token = await this.authUsuarioService.generateToken(id_usuario, authUsuarioDTO.usuario, id_rol)
            
                return {token}
            } else {
                throw new UnauthorizedException('Credenciales invalidad')
            }

        } catch(error) {
            throw new UnauthorizedException('Error en el proceso de validacion')
        } 
    }
}


