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

export interface UserInfo {
    id_usuario: number;
    usuario: string;
    id_rol: string;
    id_estado: string;

}