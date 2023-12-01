export interface Usuarios {
    id_usuario?: number;
    usuario:string;
    contrasena: string;
    id_rol: number;
    id_estado: number;
}

export interface LoginUsuario {
    id_usuario: number;
    usuario: string;
    contrasena: string;
    id_rol: number;
}