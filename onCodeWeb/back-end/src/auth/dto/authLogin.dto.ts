import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class AuthUsuarioDTO {
    @IsNotEmpty()
    @IsString()
    usuario: string;

    @IsNotEmpty()
    @IsString()
    contrasena: string;

    @IsNotEmpty()
    @IsNumber()
    id_rol: number;
}