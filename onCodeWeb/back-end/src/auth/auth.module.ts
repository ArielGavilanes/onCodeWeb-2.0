import { Module } from '@nestjs/common';
import { AuthUsuarioController } from './controllers/auth-usuario/auth-usuario.controller';
import { AuthUsuarioService } from './services/auth-usuario/auth-usuario.service';
import { JwtModule } from '@nestjs/jwt';
import { UsuariosModule } from 'src/on-code-web/usuarios/usuarios.module';
import { UsuarioService } from 'src/on-code-web/usuarios/services/usuario/usuario.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuarios } from 'src/on-code-web/usuarios/models/usuarios.model';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
    imports: [
      SequelizeModule.forFeature([Usuarios]),
      UsuariosModule,
      PassportModule, // Asegúrate de tener esta línea
        JwtModule.register({
          secret: 'oCW00tknn', // Reemplaza con tu clave secreta
          signOptions: { expiresIn: '2h' }, // Configura la expiración en 2 horas
        })],
    controllers: [AuthUsuarioController],
    providers: [AuthUsuarioService, UsuarioService, JwtStrategy]
})
export class AuthModule {}