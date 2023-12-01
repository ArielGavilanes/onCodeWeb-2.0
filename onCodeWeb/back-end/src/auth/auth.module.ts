import { Module } from '@nestjs/common';
import { AuthUsuarioController } from './controllers/auth-usuario/auth-usuario.controller';
import { AuthUsuarioService } from './services/auth-usuario/auth-usuario.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/on-code-web/usuarios/services/usuario/usuario.service';
import { UsuariosModule } from 'src/on-code-web/usuarios/usuarios.module';

@Module({
    imports: [
        UsuariosModule,
        JwtModule.register({
          secret: 'oCW00tknn', // Reemplaza con tu clave secreta
          signOptions: { expiresIn: '2h' }, // Configura la expiración en 2 horas
        })],
    controllers: [AuthUsuarioController],
    providers: [AuthUsuarioService]
})
export class AuthModule {}
