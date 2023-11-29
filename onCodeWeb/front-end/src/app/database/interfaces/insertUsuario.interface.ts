export interface InsertUsuario {
    usuario: string;
    contrasena: string;
    id_rol: number;
    id_estado: number;
    cedula: string;
    primer_nombre: string;
    segundo_nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    email: string;
    url_foto_perfil?: string;
    url_foto_portada?: string;
}