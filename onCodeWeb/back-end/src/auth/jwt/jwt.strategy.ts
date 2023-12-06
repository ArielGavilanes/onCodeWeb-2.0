// jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthUsuarioService } from '../services/auth-usuario/auth-usuario.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authUsuarioService: AuthUsuarioService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'oCW00tknn', // Reemplaza esto con tu clave secreta
        });
    }

    decodeToken(token: string) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };
    async validate(payload: any) {
        const user = await this.authUsuarioService.authUsuario(payload);
        if (!user) {
            throw new UnauthorizedException();
        }
        console.log('venido de validate', user)
        if (user) {
            const decodedToken = this.decodeToken(user);
            console.log('Token decodificado de validate:', decodedToken);
            return decodedToken
        } else {
            console.log('No se encontró token en el almacenamiento local');
        }
        return user;
    }
}