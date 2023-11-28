import { IsNotEmpty, IsString, IsInt, Length, IsOptional} from "class-validator";

export class InsertUsuarioDTO {
    
    @IsNotEmpty({ message: 'Este campo es obligatorio'})
    @IsString()
    @Length(5, 15, { message: 'Tu usuario debe tener en 5 y 15 caracteres'})
    usuario:string;

    @IsNotEmpty({ message: 'Este campo es obligatorio'})
    @IsString()
    @Length(8, 15, { message: 'Tu usuario debe tener en 8 y 15 caracteres'})
    contrasena: string;

    @IsNotEmpty({ message: 'Este campo es obligatorio'})
    @IsInt()
    id_rol: number;

    @IsNotEmpty({ message: 'Este campo es obligatorio'})
    @IsInt()
    id_estado: string;

    @IsNotEmpty({ message: 'Este campo es obligatorio'})
    @IsString()
    @Length(10, 10, { message: 'Ingresa un numero de cedula valido'})
    cedula: string;

    @IsNotEmpty({ message: 'Este campo es obligatorio'})
    @IsString()
    primer_nombre: string;

    @IsNotEmpty({ message: 'Este campo es obligatorio'})
    @IsString()
    segundo_nombre: string;

    @IsNotEmpty({ message: 'Este campo es obligatorio'})
    @IsString()
    primer_apellido: string;

    @IsNotEmpty({ message: 'Este campo es obligatorio'})
    @IsString()
    segundo_apellido: string;

    @IsNotEmpty({ message: 'Este campo es obligatorio'})
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    url_foto_perfil:string;

    @IsOptional()
    @IsString()
    url_foto_portada: string;

}

