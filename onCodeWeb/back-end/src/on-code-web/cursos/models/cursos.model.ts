import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Categorias } from 'src/on-code-web/categorias/models/categorias.model';

import { Contenido } from 'src/on-code-web/contenido/models/contenido.model';
import { Creadores } from 'src/on-code-web/creadores/models/creadores.model';
import { Cursos_Estudiantes } from 'src/on-code-web/cursos_estudiantes/models/cursos_estudiantes.model';
import { DetalleTransacciones } from 'src/on-code-web/detalle-transacciones/models/detalle-transacciones.model';

//Table Cursos of onCodeWeb
@Table({ timestamps: false })
export class Cursos extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
    id_curso: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    })
    nombre: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    descripcion: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    premium: boolean;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    precio: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    url_foto_portada: string;

    @ForeignKey(() => Categorias)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_categoria: number;

    @ForeignKey(() => Creadores)
    @Column({
        type: DataType.STRING(10),
        allowNull: false,
    })
    cedula: string;

    //Relationship with Creadores
    @BelongsTo(() => Creadores)
    Cursos_Creadores: Creadores

    //Relationship with Categorias
    @BelongsTo(() => Categorias)
    Cursos_Categorias: Categorias

    //Relationship with Contenido
    @BelongsToMany(() => Cursos, () => Contenido)
    Cursos_Contenido: Cursos[]

    //Relationship with DetalleTransacciones
    @HasMany(() => DetalleTransacciones)
    Cursos_DetalleTransacciones: DetalleTransacciones[];

    //Relationship with Cursos_Estudiantes
    @HasMany(() => Cursos_Estudiantes)
    Estudiantes_Cursos_Estudiantes: Cursos_Estudiantes[]

}