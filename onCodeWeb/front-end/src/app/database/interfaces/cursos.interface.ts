export interface Cursos {
    id_curso?: number;
    nombre: string;
    descripcion: string;
    premium: boolean;
    precio: number;
    url_foto_portada: string;
    id_categoria: number;
    cedula: string;
}   

export interface SearchCursos {
    nombre_curso: string
}