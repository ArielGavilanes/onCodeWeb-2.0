import { Module } from '@nestjs/common';
import { AuthUsuarioController } from './controllers/auth-usuario/auth-usuario.controller';
import { AuthUsuarioService } from './services/auth-usuario/auth-usuario.service';
import { UsuariosModule } from 'src/on-code-web/usuarios/usuarios.module';
import { JwtModule } from '@nestjs/jwt';

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
