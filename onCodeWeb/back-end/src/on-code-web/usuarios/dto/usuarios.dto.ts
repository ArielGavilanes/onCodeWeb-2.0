import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsInt, IsNumeric } from "sequelize-typescript";

export class UsuariosDTO {
    @IsNumber()
    id_usuario?: number;
    
    @IsNotEmpty()
    @IsString()
    usuario:string;

    @IsNotEmpty()
    @IsString()
    contrasena: string;

    @IsNotEmpty()
    @IsNumber()
    id_rol: number;

    @IsNotEmpty()   
    @IsNumber()
    id_estado: number;
}

export class LoginUsuarioDTO {
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